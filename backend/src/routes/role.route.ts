import { Router } from "express"
import { validateRequest } from 'zod-express-middleware';
import * as roleController from "../controllers/role.controller"
import * as roleSchema from "../schemas"

const router = Router();

router.post("/", validateRequest({ body: roleSchema.RoleSchema}), roleController.createRole);
router.get("/", roleController.getAllRoles);
router.get("/:id", validateRequest({ params: roleSchema.TaskGetByIdParamInput}), roleController.getRoleById);


export default router;