import { AuthService } from "../libs/auth.service";
import { CustomError } from "../helpers/errors";
import { makeResponse, paginateRequest } from "../helpers";
import IAuthClass from "../interfaces/auth.interface";
import UserService from "../services/user.service";

const authService: AuthService = new AuthService();
const userService = new UserService();

export default class AuthController implements IAuthClass {
  public createJWT = async (req, res, next): Promise<any> => {
    try {
      const {
        session: { user_login, password },
      } = req.body;

      const response = await userService.validateLogin({
        user_login,
        password,
      });

      return res
        .status(200)
        .json(makeResponse(await authService.provideAuth(response)));
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public reCreateJWT = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public createAccount = async (req, res, next) => {
    try {
      const {
        username,
        password,
        name: { first_name, last_name },
        email,
      } = req.body;

      const userResponse = await userService.createAccount({
        username,
        password,
        first_name,
        last_name,
        email,
      });

      return res.status(200).json(userResponse);
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public initatePasswordReset = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      next(err);
    }
  };

  public verifyPasswordResetToken = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public resetPassword = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };

  public verifyEmail = async (req, res, next) => {
    try {
      return res.status(200).json({});
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  };
}
