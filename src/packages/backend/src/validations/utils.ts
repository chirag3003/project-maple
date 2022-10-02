import Joi from "joi";

export const pagination = Joi.object()
  .keys({
    page: Joi.number(),
    limit: Joi.number(),
    items: Joi.number(),
    skip: Joi.number(),
    sort_order: Joi.string().valid("asc", "desc"),
    sort_by: Joi.string(),
  })
  .nand("limit", "items"); //client can either use keyword limit or items

export const date = Joi.date().iso(); //will be changed after migration
export const uuid = Joi.string().uuid();
export const filter_key = Joi.string().regex(/^filter_/);
export const filter_value = Joi.alternatives(Joi.string(), Joi.number()).allow(
  ""
);

export const users = {
  id: uuid,
  email: Joi.string().email(),
  work_email: Joi.string().email(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  password: Joi.string(),
  gender: Joi.string(),
  date_of_birth: date,
  phone_number: Joi.alternatives().try(Joi.string(), Joi.number()), //expecting a number or a number in string form
  company_name: Joi.string(),
  password_reset_token: uuid,
  email_confirmation_token: Joi.string(),
};
