import { ITodoService, TodoModel } from "../interfaces/todo.interface";
import Todo from "../models/todo.model";

export default class TodoService implements ITodoService {
  public async createTodo(reqData: TodoModel): Promise<any> {
    const todo = new Todo(reqData);
    await todo.save();
    return;
  }
  public async markComplete(id: string): Promise<any> {
    const response = await Todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
    return response;
  }
  public async deleteTodo(id: string): Promise<any> {
    const response = await Todo.findByIdAndDelete(id);
    return response;
  }
  public async updateTodo(id: string, reqData: TodoModel): Promise<any> {
    const response = await Todo.findByIdAndUpdate(id, reqData, { new: true });
    return response;
  }
  public async getTodos(page: number, limit: number): Promise<any> {
    const skip = (page - 1) * limit;
    const response = await Todo.find({}).skip(skip);
    return response;
  }
}
