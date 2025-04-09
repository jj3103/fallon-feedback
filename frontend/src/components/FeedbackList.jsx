import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard.jsx";
import { getFeedbacks } from '../services/api.js'

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFeedbacks, setShowFeedbacks] = useState(false)

    const fetchFeedbacks = async () => {
        try {
            const response = await getFeedbacks()
            return setFeedbacks(response);
        } catch (error) {
            console.log("Customer Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };



    const handleToggle = () => {
        if (!showFeedbacks) {
            fetchFeedbacks()
        }
        setShowFeedbacks((prev) => !prev)
    }

    return (
        <div className="pt-16 px-4">
            <div className="flex justify-end">
                <button
                    onClick={handleToggle}
                    className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                >
                    {showFeedbacks ? "Hide Submitted Feedback" : "View Submitted Feedback"}
                </button>
            </div>

            {showFeedbacks && (
                loading ? (
                    <p className="text-center text-gray-600 dark:text-gray-300">Loading feedbacks...</p>
                ) : (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {feedbacks.length > 0 ? (
                            feedbacks.map((feedback) => (
                                <FeedbackCard key={feedback._id} feedback={feedback} />
                            ))
                        ) : (
                            <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">
                                No feedbacks submitted yet.
                            </p>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default FeedbackList;
