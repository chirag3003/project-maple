export interface ITodoController {
  getTodos(req: any, res: any, next: any): Promise<any>;
  createTodo(req: any, res: any, next: any): Promise<any>;
  deleteTodo(req: any, res: any, next: any): Promise<any>;
  updateTodo(req: any, res: any, next: any): Promise<any>;
  markComplete(req: any, res: any, next: any): Promise<any>;
}

export interface ITodoService {
  getTodos(page: number, limit: number): Promise<any>;
  createTodo(reqData: TodoModel): Promise<any>;
  updateTodo(id: string, reqData: TodoModel): Promise<any>;
  deleteTodo(id: string): Promise<any>;
  updateTodo(id: string, reqData: TodoModel): Promise<any>;
  markComplete(id: string): Promise<any>;
}

export interface TodoModel {
  content: string;
  completed: string;
  attributes: {
    color: string;
  };
}
