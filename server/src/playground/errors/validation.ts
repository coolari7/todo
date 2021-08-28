import { OperationType } from "../operation/base";

export class ValidationError extends Error {
  constructor(
    public propertyKey: string,
    public operationType: OperationType,
    message?: string
  ) {
    super(message);
    Error.captureStackTrace(this);
  }
}
