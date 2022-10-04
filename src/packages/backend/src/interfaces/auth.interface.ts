export default interface AuthController {
  createJWT(req: any, res: any, next: any): Promise<undefined>;
  reCreateJWT(req: any, res: any, next: any): Promise<undefined>;
  initatePasswordReset(req: any, res: any, next: any): Promise<undefined>;
  verifyPasswordResetToken(req: any, res: any, next: any): Promise<undefined>;
  resetPassword(req: any, res: any, next: any): Promise<undefined>;
  createAccount(req: any, res: any, next: any): Promise<undefined>;
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
