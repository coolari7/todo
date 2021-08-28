import { __VALIDATION__ } from "./consts";
import { ValidationError } from "./errors/validation";
import { Operation } from "./operation/base";

export function validate(data: any) {
  const metadata: Map<string, Operation[]> = Reflect.getMetadata(
    __VALIDATION__,
    data
  );
  const errors: ValidationError[] = [];

  metadata.forEach((operations, propertyKey) => {
    operations.forEach((operation) => {
      try {
        data[propertyKey] = operation.execute(data[propertyKey]);
      } catch (error) {
        errors.push(
          new ValidationError(propertyKey, operation.type, error.message)
        );
      }
    });
  });
  return errors;
}
