import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import express from 'express';
import morgan from 'morgan';
import cors from "cors"
import { routes } from "../routes"
import * as errorMiddleware from "../middlewares/error.middleware"



const app = express();

// Env expand config
const config = dotenv.config();
dotenvExpand.expand(config);

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '5mb'}));

// routes
routes(app);

// Error Handler
app.use(errorMiddleware.errorEndPointNotFound);
app.use(errorMiddleware.errorHandler);

export default app;