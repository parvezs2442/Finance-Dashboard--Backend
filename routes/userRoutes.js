
import express from "express";
import { getUsers, updateUser } from "../controllers/userController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, authorize("admin"), getUsers);
router.patch("/:id", protect, authorize("admin"), updateUser);

export default router;