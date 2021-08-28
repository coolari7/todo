export type OperationType = "TRIM" | "LOWERCASE";

export abstract class Operation {
  protected constructor(public type: OperationType) {}

  public abstract execute(...args: any[]): void;
}
