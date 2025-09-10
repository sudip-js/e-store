import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config/env.config.js";
import testRoute from "./routes/test.js";
import { errHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: config.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api", testRoute);

app.use(errHandler);

export default app;
