import express from "express";
import { feedback } from "../Controller/Feedback.controller.js";

const router = express.Router();
router.post("/feedback", feedback);

export default router;
