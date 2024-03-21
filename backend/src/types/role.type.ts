import z from "zod"
import {RoleSchema, RoleCreateInputSchema, RoleUpdateInputSchema, RoleGetByIdParamInput} from '../schemas'

export type IRole = z.infer<typeof RoleSchema>
export type IRoles = IRole[];
export type IRoleCreateInput = z.infer<typeof RoleCreateInputSchema>
export type IRoleUpdateInput = z.infer<typeof RoleUpdateInputSchema>
export type IRoleGetByIdParamInput = z.infer<typeof RoleGetByIdParamInput>