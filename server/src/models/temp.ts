import { ObjectId } from "mongodb";

interface Task {
  _id: ObjectId;
  task_title: string;
  task_description: string;
  task_completed: boolean;
  list_created_at?: Date;
  list_updated_at?: Date;
}

interface List {
  _id: ObjectId;
  list_name: string;
  list_description: string;
  list_tasks: ObjectId[];
  list_created_at?: Date;
  list_updated_at?: Date;
}
