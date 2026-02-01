import { ToDoModel } from "../schema/todo.schema";

export class ToDoService {

    async getTask(){
        try {
            const task = await ToDoModel.find();
            return task            
        } catch (error) {
            console.log("Failed to get task", error);
        }
    }
    
}