import { IAuthService } from "./auth.adapter";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import { CustomError } from "../helpers/errors";

export const privateKey = fs.readFileSync("jwtRS256.key");
export const publicKey = fs.readFileSync("jwtRS256.key.pub");

export class AuthService implements IAuthService<string> {
  async provideAuth(user: any): Promise<any> {
    // generate tokens or auth identifiers here
    user = { tokenType: "access_token", ...user };
    const access_token = jwt.sign(user, privateKey, {
      algorithm: "RS256",
      expiresIn: "7d",
    });
    const setReferesh = {
      tokenType: "refresh_token",
      user: user.id,
    };
    const refresh_token = jwt.sign(setReferesh, privateKey, {
      algorithm: "RS256",
      expiresIn: "30d",
    });
    const token = {
      access_token: access_token,
      refresh_token: refresh_token,
    };
    return token;
  }

  provideReAuth(reAuthUser: any) {
    reAuthUser = { tokenType: "access_token", ...reAuthUser };
    const reAuth = jwt.sign(reAuthUser, privateKey, {
      algorithm: "RS256",
      expiresIn: "7d",
    });
    return reAuth;
  }

  verifyRefreshToken(i: string) {
    const ifVerified = jwt.verify(i, publicKey);
    return ifVerified;
  }

  verifyAuth(i: string) {
    // verify auth from the provided identity
    const ifVerified = jwt.verify(i, publicKey);
    return !!ifVerified;
  }

  getMiddleware() {
    return (_req: Request, _res: Response, next: NextFunction) => {
      try {
        // implement auth verification from the request here. All values will be provided during request service
        const token = _req.headers.authorization?.split(" ")[1] || " ";
        const checkAuth = this.verifyAuth(token);
        if (checkAuth) {
          const decoded = jwt.verify(token, publicKey) as any;
          if (decoded.tokenType === "refresh_token") {
            _req.userData = decoded.user;
          } else if (decoded.tokenType === "access_token") {
            _req.userData = decoded;
            _req.token = token;
          } else {
            throw new CustomError({
              message: "Invalid token type",
              statusCode: 401,
            });
          }
        } else {
          throw new CustomError({
            message: "Unauthorized Access Declined",
            statusCode: 403,
          });
        }
        next();
      } catch (err) {
        next(err);
      }
    };
  }
}
