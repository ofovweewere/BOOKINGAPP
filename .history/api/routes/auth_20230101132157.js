import express from "express";
import { register } from "../controllers/auth.js";
const router = express.Router();
export default router;

router.post("/register", register);
