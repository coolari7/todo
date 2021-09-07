import { App } from "./app";
import { TodoController } from "./controller/todo.controller";
import { TodoRepository } from "./repository/todo/todo.repository";
import { DatabaseService } from "./services/database.service";

const dbService = new DatabaseService("mongodb://localhost:27017");

dbService.connect().then((value) => {
  if (value.success) {
    console.log("Successfully connected to DB");
    const client = value.data;
    const database = client.db("TodoDatabase");

    const todoRepository = new TodoRepository(database.collection("todos"));

    const app = new App([new TodoController(todoRepository)]);
    app.listen();
  }
});
