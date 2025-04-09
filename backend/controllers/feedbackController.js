import { Feedback } from "../models/feedbackModel.js";

export const submitFeedback = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    await Feedback.create({ fullName, email, message });
    return res
      .status(201)
      .json({ message: "Feedback submitted successfully." });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
};
