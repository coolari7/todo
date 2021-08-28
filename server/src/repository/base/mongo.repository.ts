import mongo from "mongodb";
import { IRepository } from "./interface";
import { TResult, successful, unsuccessful } from "../../types/Result";
import {
  UPSERT_UNEXPECTED,
  UPDATE,
  INSERT,
  UNEXPECTED,
  DOCUMENT_NOT_FOUND,
  NO_MATCHING_DOCUMENTS,
} from "../../error-classes/error";

export abstract class MongoRepository<T> implements IRepository<T> {
  constructor(private _collection: mongo.Collection<T>) {}

  public async upsert(
    entity: T,
    filter: mongo.Filter<T>
  ): Promise<TResult<T, UPSERT_UNEXPECTED | UPDATE | INSERT | UNEXPECTED>> {
    return this._collection
      .replaceOne(filter, entity, { upsert: true })
      .then((value) =>
        !value.modifiedCount && !value.upsertedCount
          ? unsuccessful(new UPSERT_UNEXPECTED(value))
          : value.matchedCount === 0 && value.upsertedCount === 0
          ? unsuccessful(new INSERT(value))
          : value.matchedCount > 0 && value.modifiedCount < 1
          ? unsuccessful(new UPDATE(value))
          : successful(entity)
      )
      .catch(this.handleUnexpectedDatabaseError);
  }

  public async delete(
    filter: mongo.Filter<T>
  ): Promise<TResult<null, DOCUMENT_NOT_FOUND | UNEXPECTED>> {
    return this._collection
      .deleteOne(filter)
      .then((value) =>
        value.deletedCount < 1
          ? unsuccessful(new DOCUMENT_NOT_FOUND({ value, filter }))
          : successful(null)
      )
      .catch(this.handleUnexpectedDatabaseError);
  }

  public async find(
    filter: mongo.Filter<T>
  ): Promise<TResult<T[], NO_MATCHING_DOCUMENTS | UNEXPECTED>> {
    return this._collection
      .find(filter)
      .toArray()
      .then((value) =>
        value.length < 1
          ? unsuccessful(new NO_MATCHING_DOCUMENTS({ value, filter }))
          : successful(value)
      )
      .catch(this.handleUnexpectedDatabaseError);
  }

  public async findOne(
    filter: mongo.Filter<T>
  ): Promise<TResult<T, NO_MATCHING_DOCUMENTS | UNEXPECTED>> {
    return this._collection
      .findOne(filter)
      .then((value) =>
        value ? successful(value) : unsuccessful(new NO_MATCHING_DOCUMENTS())
      )
      .catch(this.handleUnexpectedDatabaseError);
  }

  private handleUnexpectedDatabaseError(reason: any) {
    return unsuccessful(new UNEXPECTED(reason));
  }
}
