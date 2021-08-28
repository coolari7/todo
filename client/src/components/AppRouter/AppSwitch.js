import React from "react";
import { Switch, Route } from "react-router-dom";
import { TodoAdd } from "components/Todos/TodoAdd";
import { TodoList } from "components/Todos/TodoList";
import { TodoEdit } from "components/Todos/TodoEdit";

export function AppSwitch() {
  return (
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/todos/add" component={TodoAdd} />
      <Route exact path="/todos/edit/:id" component={TodoEdit} />
    </Switch>
  );
}
