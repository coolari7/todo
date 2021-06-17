import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "context/auth";
import { HeaderHOC } from "components/Router/HeaderHOC";

export function PrivateRoute({ component: Component, ...rest }) {
  const [authState] = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        authState.isAuthenticated ? (
          <HeaderHOC>
            <Component {...props} />
          </HeaderHOC>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
