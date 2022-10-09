import Joi from "joi";
import { todos } from "./utils";

export const create_todo = {
  body: Joi.object().keys({
    content: todos.content.required(),
    completed: todos.completed,
    attributes: Joi.object().keys({
      color: todos.attributes.color,
    }),
  }),
};

export const update_todo = {
  body: Joi.object().keys({
    content: todos.content,
    completed: todos.completed,
    attributes: Joi.object().keys({
      color: todos.attributes.color,
    }),
  }),
};
