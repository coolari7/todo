import React from "react";
import { Switch, Route } from "react-router-dom";
import { TodoAdd } from "components/Todos/TodoAdd";
import { TodoList } from "components/Todos/TodoList";
import { TodoEdit } from "components/Todos/TodoEdit";
import { ListAdd } from "components/Lists/ListAdd";
import { DrawerProvider } from "components/Lists/DrawerProvider";

export function AppSwitch() {
  return (
    <DrawerProvider>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/todos/add" component={TodoAdd} />
        <Route exact path="/todos/edit/:id" component={TodoEdit} />
        <Route exact path="/lists/add" component={ListAdd} />
      </Switch>
    </DrawerProvider>
  );
}
