import { RequestHandler} from "express"
import * as TaskTypes from "../types"
import { db } from "../databases";


export const createtask: RequestHandler<unknown, unknown, TaskTypes.ITaskCreateInput, unknown> = async (req, res, next) => {
    try {
     const taskData: TaskTypes.ITaskCreateInput = req.body;
     await db.tasks.create({
        data: taskData
     })
      res.status(201);
    } catch (error) {
     next(error)
    }
 }

 export const getAllTasks: RequestHandler<unknown, TaskTypes.ITasks, unknown, unknown> = async (req, res, next) => {
    try {
        const tasks = await db.tasks.findMany();
        res.status(200).json(tasks)
    } catch (error) {
     next(error)
    }
 }

 export const getTaskById: RequestHandler<TaskTypes.ITaskGetByIdParamInput, TaskTypes.ITask, unknown, unknown> = async (req, res, next) => {
    try {
        const task = await db.tasks.findFirst({ where: {id: Number(req.params.id)}});
        if(!task) {
            throw Error('No task found.')
        }
        res.status(200).json(task)
    } catch (error) {
     next(error)
    }
 }