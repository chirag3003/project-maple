import Joi from "joi";
import { users } from "./utils";

export const sign_in = {
  body: Joi.object().keys({
    session: Joi.object()
      .keys({
        work_email: users.work_email.required(),
        password: users.password.required(),
      })
      .required()
      .min(1),
  }),
};

export const reset_password_create = {
  body: Joi.object().keys({
    work_email: users.work_email.required(),
  }),
};

export const reset_password_update = {
  body: Joi.object().keys({
    reset_token: users.password_reset_token.required(),
    password: users.password.required(),
  }),
};

export const verify_token = {
  body: Joi.object().keys({
    reset_token: users.password_reset_token.required(),
  }),
};

export const verify_email = {
  body: Joi.object().keys({
    email_confirmation_token: users.email_confirmation_token.required(),
  }),
};
