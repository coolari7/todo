import * as mongo from "mongodb";
import { TResult, successful, unsuccessful } from "../types/Result";
import { CONNECTION } from "../error-classes/error";

export class DatabaseService {
  private _client: mongo.MongoClient;

  constructor(url: string) {
    this._client = new mongo.MongoClient(url);
  }

  public async connect(): Promise<TResult<mongo.MongoClient, CONNECTION>> {
    return this._client
      .connect()
      .then((client) => successful(client))
      .catch((error) => unsuccessful(new CONNECTION(error)));
  }
}
