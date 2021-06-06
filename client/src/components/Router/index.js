import React from "react";
import { history } from "../history";
import { Switch, Router, Route } from "react-router-dom";
import { TodoShow } from "../Todos/TodoShow";
import { TodoAdd } from "../Todos/TodoAdd";
import { TodoEdit } from "../Todos/TodoEdit";
import { Header } from "../Header";

export function AppRouter() {
  return (
    <Router history={history}>
      <div className="ui container">
        <Header />
        <Switch>
          <Route path="/" exact component={TodoShow} />
          <Route path="/todos/new" component={TodoAdd} />
          <Route path="/todos/edit/:id" component={TodoEdit}/>
        </Switch>
      </div>
    </Router>
  );
}
