import { z } from "zod";
import { v4 as uuid } from "uuid";

export const todoSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID!" }).default(uuid),
  title: z
    .string()
    .min(1, { message: "Title cannot be empty!" })
    .max(64, { message: "Title cannot have more than 64 characters!" }),
  description: z.string().max(256, {
    message: "Description cannot have more than 256 characters!",
  }),
  isComplete: z.boolean().default(false),
  createdOn: z.date().default(() => new Date()),
});

export type TTodo = z.infer<typeof todoSchema>;
