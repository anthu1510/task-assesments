import { RequestHandler} from "express"
import { db } from "../databases"
import hashPwd from "password-hash"
import * as UserTypes from "../types"
import { generateTokens } from "../middlewares/jwt"


export const createUser: RequestHandler<unknown, unknown, UserTypes.IUserCreateInput, unknown> = async (req, res, next) => {
   try {
    const userData: UserTypes.IUserCreateInput = req.body;
     await db.users.create({
        data: {
            ...userData, password: hashPwd.generate(userData.password)
        }
     });
     res.status(201);
   } catch (error) {
    next(error)
   }
}

export const getAllUsers: RequestHandler<unknown, UserTypes.IUser[], unknown, unknown> = async (req, res, next) => {
    try {
        const users = await db.users.findMany({select: {
            id: true,
            roleId: true,
            name: true,
            email: true,
            status: true,
            createdAt: true,
            updatedAt: true
        }});
        res.status(200).json(users)
    } catch (error) {
     next(error)
    }
 }

 export const login: RequestHandler<unknown, UserTypes.ILoginResponse, UserTypes.ILoginInput, unknown> = async (req, res, next) => {
    try {
        const isValidEmail = await db.users.findFirst({where: {email: req.body.email}});
        if(!isValidEmail) {
            throw Error('Email id not valid.')
        }

        const isValidUser = hashPwd.verify(req.body.password, isValidEmail.password);

        if(!isValidUser) {
            throw Error('password is not matched with this email id.')
        }
        const response = generateTokens({userId: isValidEmail.id, roleId: isValidEmail.roleId})
        res.status(200).json(response)
    } catch (error) {
     next(error)
    }
 }