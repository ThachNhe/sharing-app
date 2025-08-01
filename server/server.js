import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import snippetRoutes from "./routes/snippet.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/snippets", snippetRoutes);

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
