import { Schema, Document, model } from "mongoose";
import { title } from "process";

// interface Todo_interface extends Document {
//     title: String;
// }
// const ToDoSchema = new Schema<Todo_interface>({title: String})

const ToDoSchema = new Schema({
    title: String,    
    status: Boolean
})

export const ToDoModel = model("task", ToDoSchema);