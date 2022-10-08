import ITodoService, { TodoModel } from "../interfaces/todo.interface";
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
      { new: true },
      (err: any, todo: any) => {
        if (err) throw new Error(err.message);
        return todo;
      }
    );
    return response;
  }
  public async deleteTodo(id: string): Promise<any> {
    const response = await Todo.findByIdAndDelete(id, (err: any, todo: any) => {
      if (err) throw new Error(err.message);
      return todo;
    });
    return response;
  }
  public async updateTodo(id: string, reqData: TodoModel): Promise<any> {
    const response = await Todo.findByIdAndUpdate(
      id,
      reqData,
      { new: true },
      (err: any, todo: any) => {
        if (err) throw new Error(err.message);
        return todo;
      }
    );
    return response;
  }
  public async getTodos(): Promise<any> {
    const response = await Todo.find({}, (err: any, todos: any) => {
      if (err) throw new Error(err.message);
      return todos;
    });
    return response;
  }
}
