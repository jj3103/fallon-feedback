import React, { useState } from 'react'
import { createFeedbacks } from '../services/api.js'

function FeedbackForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const validate = () => {
        const newErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!emailRegex.test(formData.email))
            newErrors.email = "Invalid email format"
        if (!formData.message.trim())
            newErrors.message = "Feedback message is required"

        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = validate()
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors)
            return;
        }
        setErrors({})
        setLoading(true)

        try {
            await createFeedbacks(formData);
            setFormData({ fullName: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting feedback:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 shadow-md rounded px-8 py-6 w-full max-w-lg mx-auto space-y-4 transition-all overflow-x-hidden"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                Submit Your Feedback
            </h2>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
                <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                />
                {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Feedback Message</label>
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='4'
                    className="w-full px-4 py-2 border rounded resize-none dark:bg-gray-700 dark:text-white"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
            >{loading ? "Submitting..." : "Submit Feedback"}</button>
        </form>
    )
}

export default FeedbackForm