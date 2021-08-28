import { registerValidator } from "../registerValidator";
import { TrimOperation } from "../operation/trim";

export function Trim() {
  return (target: any, propertyKey: string) => {
    registerValidator(target, propertyKey, TrimOperation.getInstance());
  };
}
