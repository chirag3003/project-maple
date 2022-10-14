import TodoService from "../services/todo.service";
import { CustomError } from "../helpers/errors";
import { makeResponse, paginateRequest } from "../helpers";
import { ITodoController } from "../interfaces/todo.interface";

const todoService: TodoService = new TodoService();

export default class TodoController implements ITodoController {
  public async markComplete(req: any, res: any, next: any): Promise<any> {
    try {
      const todo = await todoService.markComplete(req.params.id);
      return res.send(makeResponse(todo));
    } catch (error: any) {
      next(new CustomError(error.message));
    }
  }
  public async getTodos(req: any, res: any, next: any): Promise<any> {
    try {
      const { page, limit } = paginateRequest(req);
      const todos = await todoService.getTodos(page, limit);
      return res.send(makeResponse(todos));
    } catch (error: any) {
      next(new CustomError(error.message));
    }
  }
  public async createTodo(req: any, res: any, next: any): Promise<any> {
    try {
      const todo = await todoService.createTodo(req.body);
      return res.send(makeResponse(todo));
    } catch (error: any) {
      next(new CustomError(error.message));
    }
  }
  public async deleteTodo(req: any, res: any, next: any): Promise<any> {
    try {
      const todo = await todoService.deleteTodo(req.params.id);
      return res.send(makeResponse(todo));
    } catch (error: any) {
      next(new CustomError(error.message));
    }
  }
  public async updateTodo(req: any, res: any, next: any): Promise<any> {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      return res.send(makeResponse(todo));
    } catch (error: any) {
      next(new CustomError(error.message));
    }
  }
}
