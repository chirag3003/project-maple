export default interface ITodoService {
  getTodos(req: any, res: any, next: any): Promise<undefined>;
  createTodo(req: any, res: any, next: any): Promise<undefined>;
  deleteTodo(req: any, res: any, next: any): Promise<undefined>;
  updateTodo(req: any, res: any, next: any): Promise<undefined>;
}

export interface TodoModel {
  content: string;
  completed: string;
  attributes: {
    color: string;
  };
}
