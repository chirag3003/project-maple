export default interface ITodoService {
    createTodo(data: TodoData): Promise<undefined>;
    getTodo(id: string): Promise<undefined>;
    getTodos(): Promise<undefined>;
    setStatus(id: string, status: boolean): Promise<undefined>;
}

export interface ITodoController {
    createTodo(req: any, res: any, next: any): Promise<undefined>;
    getTodo(req: any, res: any, next: any): Promise<undefined>;
    getTodos(req: any, res: any, next: any): Promise<undefined>;
    setStatus(req: any, res: any, next: any): Promise<undefined>;
}

export interface TodoData {
    content: string;
}
