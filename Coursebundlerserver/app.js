import express from "express";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

export const app = express();
app.use("/api/v1", course);
app.use("/api/v1", user);
