import React, { useReducer } from "react";
import { authReducer } from "./reducer";
import { getAuthInstance } from "./getAuthInstance";
import { AUTH } from "./types";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });
  const authObjectRef = React.useRef();

  React.useEffect(() => {
    (async () => {
      try {
        authObjectRef.current = await getAuthInstance();
      } catch (error) {
        console.error("Error fetching authObject!", error);
      }
    })();
  }, []);

  const signIn = async () => {
    try {
      await authObjectRef.current.signIn();
      const currentUserBasicProfile = authObjectRef.current.currentUser
        .get()
        .getBasicProfile();
      const user = {
        userId: currentUserBasicProfile.getId(),
        name: currentUserBasicProfile.getName(),
        imageURL: currentUserBasicProfile.getImageUrl(),
      };
      authDispatch({ type: AUTH.SIGNED_IN, payload: user });
    } catch (error) {
      console.error("Error Signing In User!", error);
    }
  };

  const signOut = async () => {
    try {
      await authObjectRef.current.signOut();
      authDispatch({ type: AUTH.SIGNED_OUT });
    } catch (error) {
      console.error("Error Signing Out User!", error);
    }
  };

  const auth = React.useMemo(() => [authState, signIn, signOut], [authState]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const authContext = React.useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error("useAuth cannot be used outside of AuthProvider");
  }
  return authContext;
}
