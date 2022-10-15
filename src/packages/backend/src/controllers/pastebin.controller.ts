import { makeResponse } from "../helpers";
import {IPastebinController, PastebinData} from "../interfaces/pastebin.interface";
import PastebinService from "../services/pastebin.service";

const pastebinService: PastebinService = new PastebinService();
export default class PastebinController implements IPastebinController {
    public async createBin(req: any, res: any, next: any): Promise<any> {
        try {
            const { content,attributes = {}} = req.body;
            const {isPrivate=false,viewOnce=false,password=null} = attributes
            const response = await pastebinService.createBin({ content,attributes:{isPrivate,viewOnce,password} });
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async getBin(req: any, res: any, next: any): Promise<undefined> {
        try {
            const { id } = req.params;
            const {password=null} = req.body
            const response = await pastebinService.getBin(id) as PastebinData ;
            if(!response){
                return res.status(404).send({success:false,message:"Not Found"})
            }
            if(response.attributes?.isPrivate){
                if(response.attributes.password !== password)
                    return res.status(401).send({success:false,message:"Incorrect password"})
            }
            if(response.attributes?.viewOnce){
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if(response.views >= 1){
                    return res.status(404).send({success:false,message:"Not Found"})
                }
            }
            await pastebinService.addView(id)
            return res.status(200).json(makeResponse(response));
        } catch (err: any) {
            res.status(500).send({ success: false, message: err.message });
        }
    }

    public async getBins(req: any, res: any, next: any): Promise<undefined> {
        try {
            const response = (await pastebinService.getBins() as [PastebinData]).map(data => {
                return {
                    id:data.pastebinId
                }
            });
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
