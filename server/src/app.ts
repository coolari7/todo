import express from "express";
import { BaseController } from "./controller/base.controller";

export class App {
  public readonly app = express();

  constructor(controllers: [BaseController<any>, ...BaseController<any>[]]) {
    this.setupApp();
    this.setupControllers(controllers);
  }

  setupApp() {
    this.app.use(express.json());
  }

  setupControllers(
    controllers: [BaseController<any>, ...BaseController<any>[]]
  ) {
    for (let i = 0; i < controllers.length; i++) {
      this.app.use(controllers[i]!.basePath, controllers[i]!.router);
    }
  }

  listen() {
    this.app.listen(8080, () => {
      console.log("Listening at 8080");
    });
  }
}
