import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
try {
  await mongoose.connect(process.env.MONGO);
} catch (error) {
  handleError(error);
}
app.listen(3030, () => {
  console.log("Node server started");
});
