import  { useState } from "react";

const LearnUseState = () => {
    const [color, setColor] = useState(true);
    const [score, setScore] = useState(10);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
                <button
                    onClick={() => setScore(score + 10)}
                    onClickCapture={() => setColor(true)}
                    className="px-4 py-2 bg-blue-600 rounded-full text-white text-lg font-semibold hover:bg-blue-500 transition"
                >+</button>

                <h1 className={`text-3xl font-bold ${color ? 'text-teal-600' : 'text-red-600'}`}>
                    {score}
                </h1>

                <button
                    onClick={() => setScore(score - 10)}
                    onClickCapture={() => setColor(false)}
                    className="px-4 py-2 bg-blue-600 rounded-full text-white text-lg font-semibold hover:bg-blue-500 transition"
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default LearnUseState;
