// app.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", //frontend origin (replace with your frontend url)
  credentials: true // allow sending cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app
