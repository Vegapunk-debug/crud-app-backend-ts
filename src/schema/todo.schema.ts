import { Schema, Document, model } from "mongoose";

// interface Todo_interface extends Document {
//     title: String;
// }
// const ToDoSchema = new Schema<Todo_interface>({title: String})

const ToDoSchema = new Schema({
    _id: String,
    title: String,    
    status: Boolean
})

export const ToDoModel = model("task", ToDoSchema);