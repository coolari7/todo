import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TodoAdd } from "components/Todos/TodoAdd";
import { TodoList } from "components/Todos/TodoList";
import { Header } from "components/Header";
import { TodoEdit } from "components/Todos/TodoEdit";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/todos/add" component={TodoAdd} />
        <Route exact path="/todos/edit/:id" component={TodoEdit} />
      </Switch>
    </BrowserRouter>
  );
}
