import { Router } from "express"
import { validateRequest } from 'zod-express-middleware';
import * as userController from "../controllers/user.controller"
import * as userSchema from "../schemas"

const router = Router();

router.post("/", validateRequest({ body: userSchema.UserCreateInputSchema}), userController.createUser);
router.post("/login", validateRequest({ body: userSchema.UserLoginInputSchema}), userController.login);
router.get("/", userController.getAllUsers);


export default router;