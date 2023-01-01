import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
try {
  await mongoose.connect(process.env.MONGO);
} catch (error) {
  handleError(error);
}
app.listen(3030, () => {
  console.log("Node server started");
});
