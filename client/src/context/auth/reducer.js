import { AUTH } from "./types";

export function authReducer(state, action) {
  switch (action.type) {
    case AUTH.SIGNED_IN:
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH.SIGNED_OUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      throw new Error("Unhandled authReducer type!");
  }
}
