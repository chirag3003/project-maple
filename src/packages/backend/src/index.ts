import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { errorHandler, notFoundHandler } from "./helpers";
import checkENV from "./helpers/checkENV";
import * as pkg from "../package.json";
import router from "./routes";

const isDev = process.env.NODE_ENV !== "production";

export const app: express.Application = express();

// -------- Attach Preprocessors

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------- Load API Routes

console.log("☄", "Base Route", "/api");
app.use("/api", router);

app.use("/health", (req, res) => {
  return res.status(200).json({
    app: pkg.name,
    licence: pkg.license,
    request_ip: req.ip,
    uptime: process.uptime(),
    hrtime: process.hrtime(),
  });
});

// ---------- Attach Middleware handlers

app.use(notFoundHandler);
app.use(errorHandler);

// Just checking if given PORT variable is an integer or not
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 4000;
}

checkENV(() => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
  });
});
