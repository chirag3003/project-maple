import { AuthUserData } from "./auth.interface";

export default interface IUserService {
  createAccount(userData: AuthUserData): Promise<undefined>;
}
