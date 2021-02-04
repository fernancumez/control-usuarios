import express from "express";
import morgan from "morgan";
import cors from "cors";

import { Config } from "./config";
import userRoutes from "./routes/users";

const app = express();

// Server config
app.set("port", Config.PORT);

// Middelewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

export default app;
