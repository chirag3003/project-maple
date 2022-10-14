import { Router } from "express";
import TodoController from "../controllers/todo.controller";
import { validate } from "../helpers";
import { create_todo, update_todo } from "../validations/todo.validation";

const router = Router();
const TodoControllerInstance = new TodoController();

router.get("/", TodoControllerInstance.getTodos);
router.post("/", validate(create_todo), TodoControllerInstance.createTodo);
router.patch("/:id", validate(update_todo), TodoControllerInstance.updateTodo);
router.delete("/:id", TodoControllerInstance.deleteTodo);
router.patch("/:id/complete", TodoControllerInstance.markComplete);

export default router;
