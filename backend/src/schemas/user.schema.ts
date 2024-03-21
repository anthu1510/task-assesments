import z from "zod";

//export const StatusEnum = z.enum(['active', 'inactive']);
//export const StatusEnum = z.enum(['active']);

export const dateZodSchema = {
 createdAt: z.coerce.date().optional().nullable(),
 updatedAt: z.coerce.date().optional().nullable(),
};

export const userZobObject = z.object({
    roleId: z.number().min(1),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
    status: z.string().default('active').nullable().optional(),
    ...dateZodSchema
}).strict();

export const loginResponse = z.object({
    status: z.boolean(),
    accessToken: z.string().min(1),
    refreshToken: z.string().min(1)
}).strict();

export const jwtPayloadSchema = z.object({
    userId: z.number().min(1),
    roleId: z.number().min(1)
}).strict();

export const UserSchema = userZobObject.extend({ id: z.number().min(1) }).omit({password: true});
export const UserCreateInputSchema = userZobObject;
export const UserLoginInputSchema = userZobObject.pick({email: true, password: true});
export const UserUpdateInputSchema = UserCreateInputSchema.partial();