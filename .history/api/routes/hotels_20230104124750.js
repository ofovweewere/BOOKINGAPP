import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";
const router = express.Router();
export default router;
import Hotel from "../models/Hotel.js";
//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);

// router.get("/room/:id", getHotelRooms);
