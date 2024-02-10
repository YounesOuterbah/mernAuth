import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { error } from "./middlewares/Error.js";

connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use(error);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server runinng on port: ${PORT}`);
});
