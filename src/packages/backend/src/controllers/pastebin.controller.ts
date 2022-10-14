import { makeResponse } from "../helpers";
import { IPastebinController } from "../interfaces/pastebin.interface";
import PastebinService from "../services/pastebin.service";

const pastebinService: PastebinService = new PastebinService();
export default class PastebinController implements IPastebinController {
    public async createBin(req: any, res: any, next: any): Promise<any> {
        try {
            const { content } = req.body;
            const response = await pastebinService.createBin({ content });
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async getBin(req: any, res: any, next: any): Promise<undefined> {
        try {
            const { id } = req.params;
            const response = await pastebinService.getBin(id);
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async getBins(req: any, res: any, next: any): Promise<undefined> {
        try {
            const response = await pastebinService.getBins();
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async editBin(req: any, res: any, next: any): Promise<undefined> {
        try {
            const { id } = req.params;
            const { content } = req.body;
            const response = await pastebinService.editBin(id, content);
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async deleteBin(req: any, res: any, next: any): Promise<undefined> {
        try {
            const { id } = req.params;
            const response = await pastebinService.deleteBin(id);
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }
}
