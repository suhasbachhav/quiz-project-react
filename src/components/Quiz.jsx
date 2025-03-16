import { useState, useCallback } from "react";
import QUESTIONS from "../Questions";
import quizCompletedLogo from "../assets/quiz-complete.png"
import Question from "./Question";

function Quiz() {
    const [userAnswers, setUserAnswers ] = useState([]);

    const activeQuestionIndex =  userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers =>{
            return [...prevUserAnswers, selectedAnswer]
        });
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]) 

    if(quizIsCompleted){
        return (
            <div id="summary">
                <img src={quizCompletedLogo} alt="Trophy Icon" />
                <h2>
                    Quiz Completed!
                </h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;