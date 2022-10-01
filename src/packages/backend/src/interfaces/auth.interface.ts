export default interface AuthController {
  createJWT(req: any, res: any, next: any): Promise<undefined>;
  reCreateJWT(req: any, res: any, next: any): Promise<undefined>;
  initatePasswordReset(req: any, res: any, next: any): Promise<undefined>;
  verifyPasswordResetToken(req: any, res: any, next: any): Promise<undefined>;
  resetPassword(req: any, res: any, next: any): Promise<undefined>;
  verifyEmail(req: any, res: any, next: any): Promise<undefined>;
}

export interface Role {
  id: string;
  name: string;
}

export interface UserRole {
  role: Role;
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
