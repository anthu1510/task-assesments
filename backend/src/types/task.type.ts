import z from "zod"
import {TaskSchema, TaskCreateInputSchema, TaskUpdateInputSchema, TaskGetByIdParamInput} from '../schemas'

export type ITask = z.infer<typeof TaskSchema>
export type ITasks = ITask[];
export type ITaskCreateInput = z.infer<typeof TaskCreateInputSchema>
export type ITaskUpdateInput = z.infer<typeof TaskUpdateInputSchema>
export type ITaskGetByIdParamInput = z.infer<typeof TaskGetByIdParamInput>