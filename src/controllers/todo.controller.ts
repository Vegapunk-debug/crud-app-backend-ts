import { ToDoService } from "../services/todo.service";
import { Request, Response } from "express";

export class TodoController{
    constructor(public todoService: ToDoService){
    }

    async createTask(req: Request, res: Response){
        try {
            const { title, status } = req.body
            const newTask = await this.todoService.createTask(title, status)
            res.status(201).json(newTask)
        } catch (error) {
            res.status(500).json({ message: "Error creating task", error })
        }
    }

    async getTask(req: Request, res: Response){
        try {
            const tasks = await this.todoService.getTask()
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).json({ message: "Error getting tasks", error })
        }
    }

    async getTaskById(req: Request, res: Response){
        try {
            const { id } = req.body
            const task = await this.todoService.getTaskById(id)
            res.status(200).json(task)
        } catch (error) {
            res.status(500).json({ message: "Error getting task by id", error })
        }
    }

    async updateTaskByTitle(req: Request, res: Response){
        try {
            const { prevTitle, newTitle, newStatus } = req.body
            const updated = await this.todoService.updateTaskByTitle(prevTitle, newTitle, newStatus)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json({ message: "Error updating tasks by title", error })
        }
    }

    async updateTaskById(req: Request, res: Response){
        try {
            const { id, newTitle, newStatus } = req.body
            const updated = await this.todoService.updateTaskById(id, newTitle, newStatus)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json({ message: "Error updating tasks by id", error })
        }
    }

    async deleteTask(req: Request, res: Response){
        try {
            const { title } = req.body
            const deleted = await this.todoService.deleteTask(title)
            res.status(200).json({ message: "Task deleted successfully" })
        } catch (error) {
            res.status(500).json({ message: "Error deleting tasks", error })
        }
    }


}


