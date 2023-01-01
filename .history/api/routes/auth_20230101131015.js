import express from "express";
import { register } from "../controllers/auth.js";
const router = express.Router();
export default router;

router.get("/", (req, res) => {
  res.send("Hello this is auth router");
});

router.get("/register", register);
