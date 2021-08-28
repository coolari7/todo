import { Operation } from "./base";

export class TrimOperation extends Operation {
  private static instance: TrimOperation;

  private constructor() {
    super("TRIM");
  }

  public static getInstance(): TrimOperation {
    if (!TrimOperation.instance) {
      TrimOperation.instance = new TrimOperation();
    }
    return TrimOperation.instance;
  }

  public execute(value: unknown): string {
    if (typeof value !== "string") {
      throw new Error(`Value ${value} is not of type 'string'!`);
    }
    return value.trim();
  }
}
