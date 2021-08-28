import { LowerCase } from "../decorators/lowercase";
import { Model } from "../decorators/model";
import { Trim } from "../decorators/trim";
import { IUser } from "./user.interface";

@Model()
export class User implements IUser {
  @LowerCase()
  @Trim()
  public name: string;

  public age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  public getData(): IUser {
    return {
      name: this.name,
      age: this.age,
    };
  }
}
