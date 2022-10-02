import { NextFunction, Request, Response } from "express";
import { CustomError, NotFoundError } from "./errors";
import { pick } from "./utilities";
import Joi from "joi";

export const errorHandler = async (
  err: any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line
  _next: NextFunction
) => {
  if ("statusCode" in err) {
    return res.status(err.statusCode).json({
      message: err.message,
      error: true,
      data: null,
    });
  }
  return res.status(500).json({
    message: err.message,
    error: true,
    data: null,
    error_stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

export const notFoundHandler = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  return next(new NotFoundError());
};

export const validate =
  (schema: any) => (req: Request, _res: Response, next: NextFunction) => {
    // Request body should be JSON, if present
    if (Object.keys(req.body).length !== 0 && !req.is("application/json")) {
      return next(new Error("Supports JSON request body only"));
    }

    // cherry-pick from the input schema ["params", "query", "body"] fields
    const validSchema = pick(schema, ["params", "query", "body"]);

    // cherry-pick from the request object ["params", "query", "body"] fields
    const object = pick(req, Object.keys(validSchema));

    // Compile schema to Joi schema object and validate the request object
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" } })
      .validate(object);

    // If validation fails throw 400 Bad Request error
    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
      return next(
        new CustomError({
          message: errorMessage,
          statusCode: 400,
        })
      );
    }

    // Update validated fields in request with returned value
    Object.assign(req, value);

    return next();
  };
