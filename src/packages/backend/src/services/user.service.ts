import { AuthUserData, AuthLoginData } from "../interfaces/auth.interface";
import User from "../models/auth.model";
import IUserService from "../interfaces/user.interface";

export default class UserServiceClass implements IUserService {
  public createAccount = async (userData: AuthUserData): Promise<any> => {
    try {
      const response = new User({
        username: userData.username,
        name: {
          first_name: userData.first_name,
          last_name: userData.last_name,
        },
        email: userData.email,
      });
      await response.setPassword(userData.password);
      await response.save();
      return {
        userData: {
          email: response.email,
          username: response.username,
        },
      };
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  public validateLogin = async (loginData: AuthLoginData): Promise<any> => {
    try {
      const response = await User.findOne({
        // username: loginData.user_login,
        email: loginData.user_login,
      });

      if (response === null || !response.validatePassword(loginData.password))
        throw new Error("Username or Password is not valid");

      return response;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  public validate;
}
