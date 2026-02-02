import { ToDoService } from "../services/todo.service";
import { Request, Response } from "express";

export class TodoController{
    constructor(public todoService: ToDoService){
    }

    createTask = async (req: Request, res: Response) => {
        try {
            const { title, status } = req.body
            const newTask = await this.todoService.createTask(title, status)
            res.status(201).json(newTask)
        } catch (error) {
            res.status(500).json({ message: "Error creating task", error })
        }
    }

    getTask = async (req: Request, res: Response) => {
        try {
            const tasks = await this.todoService.getTask()
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).json({ message: "Error getting tasks", error })
        }
    }

    updateTask = async (req: Request, res: Response) => {
        try {
            const { prevTitle, newTitle, newStatus } = req.body
            const updated = await this.todoService.updateTask(prevTitle, newTitle, newStatus)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json({ message: "Error updating tasks", error })
        }
    }

    deleteTask = async (req: Request, res: Response) => {
        try {
            const { title } = req.body
            const deleted = await this.todoService.deleteTask(title)
            res.status(200).json({ message: "Task deleted successfully" })
        } catch (error) {
            res.status(500).json({ message: "Error deleting tasks", error })
        }
    }
}


