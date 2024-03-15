import z from "zod"
import {
UserSchema, UserCreateInputSchema, UserUpdateInputSchema, 
UserLoginInputSchema, loginResponse, jwtPayloadSchema } from "../schemas"

export type IUser = z.infer<typeof UserSchema>;
export type IUsers = IUser[];
export type IUserCreateInput = z.infer<typeof UserCreateInputSchema>;
export type IUserUpdateInput = z.infer<typeof UserUpdateInputSchema>;
export type ILoginInput = z.infer<typeof UserLoginInputSchema>;
export type ILoginResponse = z.infer<typeof loginResponse>;
export type IJwtPayload = z.infer<typeof jwtPayloadSchema>;