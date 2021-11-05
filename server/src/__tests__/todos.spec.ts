import { Collection, Db, MongoClient } from "mongodb";
import supertest from "supertest";
import { App } from "src/app";
import { TodoController } from "src/controller/todo.controller";
import { TodoRepository } from "src/repository/todo/todo.repository";
import { DatabaseService } from "src/services/database.service";
import { TTodo } from "src/models/todo.model";

async function connect(url = "mongodb://localhost:27017") {
  const dbService = new DatabaseService(url);
  const result = await dbService.connect();
  if (result.success) {
    console.log("Database Connected!");
    return result.data;
  }
  throw result.error;
}

async function clearDatabase(client: MongoClient, dbName: string) {
  await client.db(dbName).dropDatabase();
}

describe("--E2E--", () => {
  const DB_NAME = "TestDB";
  const COLLECTION_NAME = "todos";
  let todoRepository: TodoRepository;
  let client: MongoClient;
  let db: Db;
  let collection: Collection<TTodo>;
  let application: App;
  let request: supertest.SuperTest<supertest.Test>;

  beforeAll(async () => {
    client = await connect();
    db = client.db(DB_NAME);
    collection = db.collection(COLLECTION_NAME);
    todoRepository = new TodoRepository(collection);
    application = new App([new TodoController(todoRepository)]);
    request = supertest(application.app);
  });

  afterEach(async () => {
    await clearDatabase(client, DB_NAME);
  });

  afterAll(async () => {
    await client.close();
  });

  it("adds a document", async () => {
    const todo = {
      title: "Test Title",
      description: "Test Description",
    };
    const response = await request.put("/todos").send(todo);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(todo.title);
    expect(response.body.description).toBe(todo.description);
    expect(response.body.isComplete).toBe(false);
    expect(new Date(response.body.createdOn).toLocaleDateString()).toBe(
      new Date().toLocaleDateString()
    );
    const dbResult = await collection.findOne({ id: `${response.body.id}` });
    if (!dbResult) {
      fail("No document found! DB Not updated!");
    }
    expect(dbResult).toBeDefined();
    expect(dbResult.title).toBe(todo.title);
    expect(dbResult.description).toBe(todo.description);
  });
});
