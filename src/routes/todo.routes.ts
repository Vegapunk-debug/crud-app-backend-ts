import { Router } from 'express';
import { TodoController } from '../controllers/todo.controller';
import { ToDoService } from '../services/todo.service';

const router = Router();

const todoService = new ToDoService();
const todoController = new TodoController(todoService);


router.post("/task", todoController.createTask)
router.get("/task", todoController.getTask)
router.put("/task", todoController.updateTask)
router.delete("/task", todoController.deleteTask)

export default router;