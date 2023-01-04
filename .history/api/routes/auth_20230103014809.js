import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();
export default router;

router.post("/register", register);
router.post("/login", login);
