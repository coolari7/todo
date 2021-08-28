import { Operation } from "./base";

export class LowercaseOperation extends Operation {
  private static instance: LowercaseOperation;

  private constructor() {
    super("LOWERCASE");
  }

  public static getInstance(): LowercaseOperation {
    if (!LowercaseOperation.instance) {
      LowercaseOperation.instance = new LowercaseOperation();
    }
    return LowercaseOperation.instance;
  }

  public execute(value: unknown): string {
    if (typeof value !== "string") {
      throw new Error(`Value ${value} is not of type 'string'!`);
    }
    return value.toLowerCase();
  }
}
