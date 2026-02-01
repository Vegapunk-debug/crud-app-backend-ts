import { Router } from "express";
import { ToDoService } from "../services/todo.service";

const router = Router();

const todoService = new ToDoService()

router.get("/task", todoService.getTask)