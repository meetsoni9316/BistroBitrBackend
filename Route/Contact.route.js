import express from "express";
import { contact } from "../Controller/Contact.controller.js";

const router = express.Router();
router.post("/contact", contact);

export default router;
