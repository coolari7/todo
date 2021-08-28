import express from "express";
import { todoSchema } from "./models/todo.model";
import { TodoRepository } from "./repository/todo/todo.repository";
import { DatabaseService } from "./services/database.service";

const dbService = new DatabaseService(
  "mongodb+srv://admin:admin@my-cluster.1viss.mongodb.net?retryWrites=true&w=majority"
);

dbService.connect().then((value) => {
  if (value.success) {
    const client = value.data;
    const database = client.db("TodoDatabase");

    const todoRepository = new TodoRepository(database.collection("todos"));

    const app = express();
    app.use(express.json());

    app.post("/todos", async (req, res) => {
      const { body } = req;

      const result = todoSchema.safeParse(body);
      if (!result.success) {
        return res.status(400).json(result.error);
      }
      const todo = result.data;
      const repoResult = await todoRepository.upsert(todo, { id: todo.id });
      if (repoResult.success) {
        return res.status(201).json(repoResult.data);
      } else {
        return res.status(500).json(repoResult.error);
      }
    });

    app.listen(8080, () => {
      console.log("Listening at 8080");
    });
  }
});
