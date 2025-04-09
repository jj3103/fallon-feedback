import FeedbackForm from "../components/FeedbackForm";

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center px-4 overflow-x-hidden">
            <div className="max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-center">We value your feedback</h1>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-8">
                    Please fill out the form below to let us know how we're doing.
                </p>
                <FeedbackForm />
            </div>
        </div>
    );
};

export default Home;
