import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

import express from "express";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", feedbackRoutes);

export default app;
