import { Request, Response, NextFunction } from "express";

export default interface AuthController {
  createJWT(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
  reCreateJWT(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
  initatePasswordReset(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
  verifyPasswordResetToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
  resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
  createAccount(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<undefined>;
}

export interface AuthModel {
  tokenType: string;
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  iat: number;
  exp: number;
}

export interface AuthUserData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

export interface AuthLoginData {
  user_login: string;
  password: string;
}
