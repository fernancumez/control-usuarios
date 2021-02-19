import express from "express";
import morgan from "morgan";
import cors from "cors";

import config from "./config";
import userRoutes from "./routes/user.routes";

const app = express();

// Settings
app.set("port", config.PORT);

// Middelewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);

export default app;
