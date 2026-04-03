import express from "express";
import { getSummary, categorySummary, monthlyTrends } from "../controllers/dashboardController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, authorize("admin", "analyst"), getSummary);
router.get("/category", protect, authorize("admin", "analyst"), categorySummary);
router.get("/trends", protect, authorize("admin", "analyst"), monthlyTrends);

export default router;