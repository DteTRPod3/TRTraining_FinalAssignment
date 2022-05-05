import { ILoginCredentials } from "./../../../models/LoginCredentials";
import { LOGIN, LOGOUT } from "./actionType";

export const login = (loginCredentials: ILoginCredentials) => {
  return { type: LOGIN, loginCredentials };
};

export const logout = () => {
  return { type: LOGOUT };
};
