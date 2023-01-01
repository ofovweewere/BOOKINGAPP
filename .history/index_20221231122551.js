import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.listen(3030, () => {
  console.log("Node server started");
});
