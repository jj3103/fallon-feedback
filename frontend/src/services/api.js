import axios from "axios";

const API_BASE_URL = "https://feedback-website-3mzz.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getFeedbacks = async () => {
  try {
    const response = await api.get("/api/get/feedback");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to get feedbacks" };
  }
};

export const createFeedbacks = async (data) => {
  try {
    const response = await api.post("/api/post/feedback", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create feedback" };
  }
};
