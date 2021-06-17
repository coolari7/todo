import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { TodoShow } from "components/Todos/TodoShow";
import { TodoAdd } from "components/Todos/TodoAdd";
import { TodoEdit } from "components/Todos/TodoEdit";
import { Login } from "components/Login";
import { PrivateRoute } from "components/Router/PrivateRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={TodoShow} />
          <PrivateRoute path="/todos/new" exact component={TodoAdd} />
          <PrivateRoute path="/todos/edit/:id" exact component={TodoEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
