import express from "express";
import { createHotel, updateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();
export default router;
import Hotel from "../models/Hotel.js";
//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    console.log("hi i'm a hotel route");
    res.status(200).json(hotels);
  } catch (err) {
    return next(err);
  }
});
