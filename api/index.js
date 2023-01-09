import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// Accessing the path module
import path from "path";
import { fileURLToPath } from "url";
const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    // handleError(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
//Step 1:
app.use(
  express.static(path.resolve(__dirname, "../client/react-booking-ui/build"))
);
app.use(express.static(path.resolve(__dirname, "../admin/adminapp/build")));
// Step 2:

// Step 2:
app.get("/admin*", function (request, response) {
  response.sendFile(
    path.resolve(__dirname, "../admin/adminapp/build", "index.html")
  );
});

app.get("*", function (req, res) {
  res.sendFile(
    path.resolve(__dirname, "../client/react-booking-ui", "build", "index.html")
  );
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  connect();
  console.log("Node server started");
});
