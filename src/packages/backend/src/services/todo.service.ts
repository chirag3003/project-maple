import ITodoService, { TodoData } from "../interfaces/todo.inteface";
import Todo from "../models/todo";

export default class TodoService implements ITodoService {
    async createTodo(data: TodoData): Promise<any> {
        try {
            const response = new Todo(data);
            await response.save();
            return {
                pastebinData: {
                    content: response.content,
                    id: response.id,
                },
            };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    async getTodo(id: string): Promise<any> {
        try {
            const response = await Todo.findById(id);
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    async getTodos(): Promise<any> {
        try {
            const response = await Todo.find({});
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    async setStatus(id: string, status: boolean): Promise<any> {
        try {
            const response = await Todo.findByIdAndUpdate(id, { $set: { completed: status } });
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}
