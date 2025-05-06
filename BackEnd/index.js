import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRouter from "./Routes/messageRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// Contact API route
app.use("/api", contactRouter);

// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URL);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
