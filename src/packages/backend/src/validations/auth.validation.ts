import Joi from "joi";
import { users } from "./utils";

export const sign_in = {
  body: Joi.object().keys({
    session: Joi.object()
      .keys({
        user_login: users.username.required(),
        password: users.password.required(),
      })
      .required()
      .min(1),
  }),
};

export const register = {
  body: Joi.object()
    .keys({
      email: users.email.required(),
      password: users.password.required(),
      name: Joi.object()
        .keys({
          first_name: users.name.first_name.required(),
          last_name: users.name.last_name.required(),
        })
        .required(),
      username: users.username.required(),
    })
    .required()
    .min(1),
};

export const reset_password_create = {
  body: Joi.object().keys({
    email: users.email.required(),
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
