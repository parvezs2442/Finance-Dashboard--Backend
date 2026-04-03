import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/recordController.js";
import { protect, authorize } from "../middleware/auth.js";
import { validateRecord } from "../middleware/validate.js";

const router = express.Router();

router.use(protect);

router.post("/", authorize("admin"), validateRecord, createRecord);
router.get("/", authorize("admin", "analyst", "viewer"), getRecords);
router.put("/:id", authorize("admin"), updateRecord);
router.delete("/:id", authorize("admin"), deleteRecord);

export default router;