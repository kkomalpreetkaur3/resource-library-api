import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());

app.get("/", (_req, res) => {
  res.send("Resource Library API running");
});

export default app;