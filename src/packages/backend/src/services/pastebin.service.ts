import IPastebinService, {PastebinData} from "../interfaces/pastebin.interface";
import Pastebin from "../models/pastebin.model";

export default class PastebinService implements IPastebinService {
    public async createBin(data: PastebinData): Promise<any> {
        try {
            const response = new Pastebin(data);
            if (data.pastebinId) response.setID(data.pastebinId);
            else response.setID();
            await response.save();
            return {
                pastebinData: {
                    content: response.content,
                    id: response.pastebinId,
                },
            };
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    }

    public async getBin(id: string): Promise<any> {
        try {
            const response = await Pastebin.findOne({pastebinId: id});
            return response;
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    }

    public async getBins(): Promise<any> {
        try {
            const response = await Pastebin.find({});
            return response;
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    }

    public async editBin(id: string, content: string): Promise<any> {
        try {
            const response = await Pastebin.updateOne(
                {pastebinId: id},
                {$set: {content: content}}
            );
            return response;
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    }

    public async addView(id: string): Promise<any> {
        try {
            const response = await Pastebin.updateOne({pastebinId: id}, {
                $inc: {
                    views: 1
                }
            })
            return response
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message)
        }
    }

    public async deleteBin(id: string): Promise<any> {
        try {
            const response = await Pastebin.deleteOne({pastebinId: id});
            return response;
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    }
}
