export default interface IPastebinService {
  createBin(data: PastebinData): Promise<undefined>;
  editBin(id: string, content: string): Promise<undefined>;
  deleteBin(id: string): Promise<undefined>;
  getBin(id: string): Promise<undefined>;
  getBins(): Promise<undefined>;
}

export interface IPastebinController {
  createBin(req: any, res: any, next: any): Promise<undefined>;
  editBin(req: any, res: any, next: any): Promise<undefined>;
  deleteBin(req: any, res: any, next: any): Promise<undefined>;
  getBin(req: any, res: any, next: any): Promise<undefined>;
  getBins(req: any, res: any, next: any): Promise<undefined>;
}

export interface PastebinData {
  content: string;
}
