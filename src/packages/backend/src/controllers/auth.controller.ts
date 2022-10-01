import { v4 as uuidv4 } from "uuid";

import { AuthService } from "../libs/auth.service";
import { CustomError } from "../helpers/errors";
import { makeResponse, paginateRequest } from "../helpers";
import IAuthClass from "../interfaces/auth.interface";

const authService: AuthService = new AuthService();
const authProvider = new AuthService();

export default class AuthController implements IAuthClass {
  public createJWT = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public reCreateJWT = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  // export const destroySession = async (userCreds: any) => {}

  public initatePasswordReset = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      next(err);
    }
  };

  public verifyPasswordResetToken = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public resetPassword = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public verifyEmail = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };
}
