import z from "zod";

export const taskZodObject = z.object({
    assignedTo: z.number().min(1),
    title: z.string().min(1),
    description: z.string().min(1).optional().nullable(),
    category: z.string().min(1),
    creationDate: z.coerce.date().optional().nullable(),
    dueDate: z.coerce.date().optional().nullable()
}).strict();

export const TaskSchema = taskZodObject.extend({ id: z.number().min(1) });
export const TaskCreateInputSchema = taskZodObject;
export const TaskUpdateInputSchema = taskZodObject.partial();
export const TaskGetByIdParamInput = z.object({id: z.string().min(1)});