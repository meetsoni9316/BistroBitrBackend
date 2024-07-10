import express from "express";
import { table } from "../Controller/Reservation.controller.js";

const router = express.Router();
router.post("/reservation", table);
export default router;
