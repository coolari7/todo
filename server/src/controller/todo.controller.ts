import express from "express";
import { todoSchema, TTodo } from "../models/todo.model";
import { TodoRepository } from "src/repository/todo/todo.repository";
import { DOCUMENT_NOT_FOUND } from "../error-classes/error";
import { BaseController } from "./base.controller";

export class TodoController extends BaseController<TTodo> {
  constructor(repository: TodoRepository) {
    super("/todos", repository);
    this.router.put("/", this.put);
    this.router.delete("/", this.delete);
  }

  public put = async (req: express.Request, res: express.Response) => {
    const entity = todoSchema.safeParse(req.body);
    if (entity.success) {
      const result = await this.repository.upsert(entity.data, {
        id: entity.data.id,
      });
      if (result.success) {
        res.status(200).json(result.data);
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(400).json(entity.error);
    }
  };

  public delete = async (req: express.Request, res: express.Response) => {
    if (req.body.id) {
      const result = await this.repository.delete({ id: req.body.id });
      if (result.success) {
        res.status(204).send();
      } else {
        if (result.error instanceof DOCUMENT_NOT_FOUND) {
          res.status(400).json(result.error);
        } else {
          res.status(500).json(result.error);
        }
      }
    } else {
      res.status(400).json({ message: "id needed for deletion!" });
    }
  };
}
