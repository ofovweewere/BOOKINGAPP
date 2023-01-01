import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    // handleError(error);
    throw error;
  }
};

app.listen(3030, () => {
  connect();
  console.log("Node server started");
});
