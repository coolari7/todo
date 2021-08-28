import "reflect-metadata";
import { __VALIDATION__ } from "./consts";
import { User } from "./user/user";
import { validate } from "./validate";

console.log("Before try...catch");
try {
  console.log("Before new User is created");
  const user = new User("Arijit Chowdhury   ", 23);
  const errors = validate(user);
  if (errors.length === 0) {
    console.log(user.getData());
  } else {
    console.log(errors);
  }
} catch (error) {
  console.error(error);
} finally {
  console.info("Finished execution!");
}
