import { registerValidator } from "../registerValidator";
import { LowercaseOperation } from "../operation/lowercase";

export function LowerCase() {
  return (target: any, propertyKey: string) => {
    registerValidator(target, propertyKey, LowercaseOperation.getInstance());
  };
}
