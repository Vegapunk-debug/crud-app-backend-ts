import { Schema, Document, model } from "mongoose";
import { title } from "process";

// interface Todo_interface extends Document {
//     title: String;
// }
// const ToDoSchema = new Schema<Todo_interface>({title: String})

const ToDoSchema = new Schema({
    title: String
})

export const ToDoModel = model("task", ToDoSchema);