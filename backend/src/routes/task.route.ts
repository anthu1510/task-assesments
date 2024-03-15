import { Router } from "express"
import { validateRequest } from 'zod-express-middleware';
import * as taskController from "../controllers/task.controller"
import * as taskSchema from "../schemas"

const router = Router();

router.post("/", validateRequest({ body: taskSchema.TaskCreateInputSchema}), taskController.createtask);
router.get("/", taskController.getAllTasks);
router.get("/:id", validateRequest({ params: taskSchema.TaskGetByIdParamInput}), taskController.getTaskById);


export default router;