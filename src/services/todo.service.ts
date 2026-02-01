import { ToDoModel } from "../schema/todo.schema";

export class ToDoService {

    async createTask(title: string, status: boolean){
        try {
            const newTask = await ToDoModel.create({ title, status });
            return newTask
        } catch (error) {
            console.log("Error creating task:", error);
            throw error
        }
    }
    
    async getTask(){
        try {
            const task = await ToDoModel.find();
            return task            
        } catch (error) {
            console.log("Failed to get task", error);
        }
    }
    
}