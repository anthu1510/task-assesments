import z from "zod"
import { dateZodSchema } from "./user.schema";

export const roleZobObject = z.object({
    name: z.string().min(1),
    status: z.string().default('active').nullable().optional(),
    ...dateZodSchema
}).strict();

export const RoleSchema = roleZobObject.extend({ id: z.number().min(1) });
export const RoleCreateInputSchema = roleZobObject;
export const RoleUpdateInputSchema = roleZobObject.partial();
export const RoleGetByIdParamInput = z.object({id: z.string().min(1)});