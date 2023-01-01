import express from "express";
const router = express.Router();
export default router;

router.get("/", (req, res) => {
  res.send("Hello this is auth router");
});

router.get("/register", (req, res) => {
  res.send("Hello this is register endpoint");
});
