import express from "express";
import { MongoRepository } from "src/repository/base/mongo.repository";

export abstract class BaseController<T> {
  public router = express.Router();
  public basePath: string;
  protected repository: MongoRepository<T>;

  constructor(path: string, repo: MongoRepository<T>) {
    this.basePath = path[0] !== "/" ? "/" + path : path;
    this.repository = repo;
  }

  abstract put(req: express.Request, res: express.Response): Promise<any>;
  abstract delete(req: express.Request, res: express.Response): Promise<any>;
}
