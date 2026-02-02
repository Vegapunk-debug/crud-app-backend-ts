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
}


