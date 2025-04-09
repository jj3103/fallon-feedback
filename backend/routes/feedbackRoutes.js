import {
  getFeedback,
  submitFeedback,
} from "../controllers/feedbackController.js";
import express from "express";

const router = express.Router();

router.post("/post/feedback", submitFeedback);
router.get("/get/feedback", getFeedback);

export default router;
