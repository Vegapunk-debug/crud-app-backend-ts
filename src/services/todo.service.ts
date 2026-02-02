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
            throw error
        }
    }

    async updateTask(prevTitle: string, newTitle: string, newStatus: boolean){
        try {
            const updatedTask = await ToDoModel.findOneAndUpdate(
                { title: prevTitle},
                { title: newTitle, status: newStatus },
                { new: true }
            );
            if(!updatedTask) console.log("Task to update not found");
            return updatedTask            
        } catch (error) {
            console.log("Failed to update task", error);
            throw error
        }
    } 

    async deleteTask(title: string){
        try {
            const deletedTask = await ToDoModel.findOneAndDelete({ title: title });
            return deletedTask            
        } catch (error) {
            console.log("Failed to delete task", error);
            throw error
        }
    } 
}