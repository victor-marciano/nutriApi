import express from "express";
import DocController from "../controllers/DocController";
const router = express.Router();

router.get("/documentation", DocController.documentation);

// Food routes

export default router;
