import { Request, Response, NextFunction, RequestHandler } from "express";

type MiddlewareFunction = (rq: Request, rs: Response, nx: NextFunction) => void;
export interface IAuthService<T> {
  provideAuth(i: T): Promise<T> | T;
  provideReAuth(i: T): Promise<T> | T;
  verifyAuth(i: T): Promise<boolean> | boolean;
  getMiddleware():
    | Promise<MiddlewareFunction>
    | MiddlewareFunction
    | RequestHandler;
}

export class AuthService implements IAuthService<string> {
  provideAuth(_user: any) {
    // generate tokens or auth identifiers here
    return {} as any;
  }

  provideReAuth(_i: string) {
    return "";
  }

  verifyRefreshToken(i: string) {
    return !!i;
  }

  verifyAuth(i: string) {
    // verify auth from the provided identity
    return !!i;
  }
  verifyAdminAuth(i: string) {
    // verify admin auth from the provided identity
    return !!i;
  }
  getMiddleware() {
    return () => {
      throw new Error("Not implemented yet");
    };
  }
}
