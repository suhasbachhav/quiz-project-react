import { useState, useEffect } from "react";

function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                if (prevRemainingTime <= 100) {
                    clearInterval(intervalId);
                    onTimeout();
                    return 0; // Ensure it doesn't go below 0
                }
                return prevRemainingTime - 100;
            });
        }, 100);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [onTimeout]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, [timeout, onTimeout]);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
}

export default QuestionTimer;
