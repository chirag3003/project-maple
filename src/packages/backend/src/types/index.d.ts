export type ReqUserData = any;

declare namespace Express {
  export interface Request {
    // user?: {
    //   userData?: ReqUserData;
    //   token?: string;
    // }
    userData?: ReqUserData;
    token?: string;
  }
}

declare module "express-serve-static-core" {
  export interface Request {
    // user?: {
    //   userData?: ReqUserData;
    //   token?: string;
    // }
    userData?: ReqUserData;
    token?: string;
  }
}

export interface companyArgs {
  name: string;
  email: string;
  [x: string]: unknown;
}
