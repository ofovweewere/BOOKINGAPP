import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();
export default router;

//CREATE
router.post("/", async (req, res) => {
  console.log("here called");
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.post("/", async (req, res) => {
  console.log("here called");
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
//GET
//GET ALL
