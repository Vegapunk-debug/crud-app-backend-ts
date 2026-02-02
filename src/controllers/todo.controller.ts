import { Router } from "express";
import { ToDoService } from "../services/todo.service";

const router = Router();

const todoService = new ToDoService()

router.post("/task", todoService.createTask)
router.get("/task", todoService.getTask)
router.put("/task", todoService.updateTask)
router.delete("/task", todoService.deleteTask)
