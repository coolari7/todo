import { AppError, TResult } from "src/types/Result";

export interface IRepository<T> {
  upsert(entity: T, filter: any): Promise<TResult<T, AppError>>;
  delete(filter: any): Promise<TResult<null, AppError>>;
  find(filter: any): Promise<TResult<T[], AppError>>;
  findOne(filter: any): Promise<TResult<T, AppError>>;
}
