import { RequestHandler} from "express"
import * as RoleTypes from "../types"
import { db } from "../databases";


export const createRole: RequestHandler<unknown, unknown, RoleTypes.IRoleCreateInput, unknown> = async (req, res, next) => {
    try {
     const roleData: RoleTypes.IRoleCreateInput = req.body;
     await db.user_Roles.create({
        data: roleData
     })
      res.status(201);
    } catch (error) {
     next(error)
    }
 }

 export const getAllRoles: RequestHandler<unknown, RoleTypes.IRoles, unknown, unknown> = async (req, res, next) => {
    try {
        const roles = await db.user_Roles.findMany();
        res.status(200).json(roles)
    } catch (error) {
     next(error)
    }
 }

 export const getRoleById: RequestHandler<RoleTypes.ITaskGetByIdParamInput, RoleTypes.ITask, unknown, unknown> = async (req, res, next) => {
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