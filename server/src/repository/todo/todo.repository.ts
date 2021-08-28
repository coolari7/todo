import { TTodo } from "src/models/todo.model";
import { MongoRepository } from "../base/mongo.repository";

export class TodoRepository extends MongoRepository<TTodo> {}
