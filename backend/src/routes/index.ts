import {Application} from "express"
import roleRouter from "./role.route"
import userRouter from "./user.route"
import taskRouter from "./task.route"

export const routes = (app: Application) => {
    app.use("/api/roles", roleRouter);
    app.use("/api/users", userRouter);
    app.use("/api/tasks", taskRouter);

}