import express from "express";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import { connectDB } from "./config/database.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

export const app = express();
app.use("/api/v1", course);
app.use("/api/v1", user);
app.use(errorMiddleware);
