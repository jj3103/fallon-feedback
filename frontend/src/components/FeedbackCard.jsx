import React from "react";
import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition hover:shadow-lg">
            <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {feedback.fullName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.email}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{feedback.message}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                {formatDistanceToNow(new Date(feedback.createdAt), { addSuffix: true })}
            </p>
        </div>
    );
};

export default FeedbackCard;
