import express from "express";
import FoodController from "../controllers/FoodController";
import DietController from "../controllers/DietController";
const router = express.Router();

// Food routes
router.get("/food/", FoodController.getAll);
router.get("/food/:id", FoodController.getOne);

// Diet routes
router.get("/diet/", DietController.getAll);
router.get("/diet/:id", DietController.getOne);
router.post("/diet/", DietController.new);
router.put("/diet/:id", DietController.update);
router.delete("/diet/:id", DietController.delete);

export default router;
