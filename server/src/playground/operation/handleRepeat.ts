import { Operation, OperationType } from "./base";

export function handleRepeatOperation(
  metadata: Map<string, Operation[]>,
  propertyKey: string,
  type: OperationType
) {
  const operations = metadata.get(propertyKey) ?? [];
  const operation = operations.find((operation) => operation.type === type);
  if (operation) {
    throw new Error(
      `Operation ${type} already present on property '${propertyKey}'!`
    );
  }
  return operations;
}
