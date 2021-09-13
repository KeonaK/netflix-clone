import React from "react";
import { Redirect, Route } from "react-router";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          //children are the component page for sign in or sign up
          return children;
        }

        if (user) {
          // if user redirect to the loggedInPath
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
