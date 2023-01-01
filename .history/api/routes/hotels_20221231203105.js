import express from "express";
const router = express.Router();
export default router;

//CREATE
router.post("/", async () => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
//DELETE
//GET
//GET ALL
