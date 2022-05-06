import { LoginStatus } from "./../../../models/LoginStatus";
import { LOGIN, LOGOUT } from "./actionType";

const initialState: { authenticated: LoginStatus } = {
  authenticated: LoginStatus.LoggedOut,
};

const AuthenticationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      const { loginCredentials } = action;
      const authenticated =
        loginCredentials?.password === "L#(qc{f}TaJu4%4k"
          ? LoginStatus.LoginSuccess
          : LoginStatus.LoginFailed;
      return { ...state, authenticated };
    case LOGOUT:
      return { ...state, authenticated: LoginStatus.LoggedOut };
    default:
      return state;
  }
};

export default AuthenticationReducer;
