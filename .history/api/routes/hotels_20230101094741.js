import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();
export default router;

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    console.log("Here called for update 22");
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
//GET
//GET ALL
