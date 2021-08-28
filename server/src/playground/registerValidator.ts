import { __VALIDATION__ } from "./consts";
import { Operation } from "./operation/base";
import { handleRepeatOperation } from "./operation/handleRepeat";

export function registerValidator<T extends Operation>(
  target: any,
  propertyKey: string,
  operation: T
) {
  const metadata: Map<string, Operation[]> =
    Reflect.getMetadata(__VALIDATION__, target) ?? new Map();

  /* STEP 1: If OperationType is already defined, throw an error */
  const operations = handleRepeatOperation(
    metadata,
    propertyKey,
    operation.type
  );

  /* STEP 2: Else, add operation to the metadata and save */
  metadata.set(propertyKey, [...operations, operation]);
  Reflect.defineMetadata(__VALIDATION__, metadata, target);
}
