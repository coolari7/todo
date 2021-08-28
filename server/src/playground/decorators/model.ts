import { __VALIDATION__ } from "../consts";

export function Model() {
  return (constructor: any) => {
    let newConstructor = function (...args: any[]) {
      let func: any = function () {
        return new constructor(...args);
      };
      func.prototype = constructor.prototype;
      let result = new func();
      return result;
    };
    newConstructor.prototype = constructor.prototype;
    return newConstructor;
  };
}
