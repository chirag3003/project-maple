import IPastebinService, { PastebinData } from "../interfaces/pastebin.interface";
import Pastebin from "../models/pastebin";

export default class PastebinService implements IPastebinService {
    public async createBin(data: PastebinData): Promise<any> {
        try {
            const response = new Pastebin(data);
            response.setID();
            await response.save();
            return {
                pastebinData: {
                    content: response.content,
                    id: response.id,
                },
            };
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    public async getBin(id: string): Promise<any> {
        try {
            console.log(id);

            const response = await Pastebin.findOne({ id: id });
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    public async getBins(): Promise<any> {
        try {
            const response = await Pastebin.find({});
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    public async editBin(id: string, content: string): Promise<any> {
        try {
            const response = await Pastebin.updateOne({ id: id }, { $set: { content: content } });
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    public async deleteBin(id: string): Promise<any> {
        try {
            const response = await Pastebin.deleteOne({ id: id });
            return response;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}
