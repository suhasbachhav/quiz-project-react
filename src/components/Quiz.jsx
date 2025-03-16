import { useState } from "react";
import QUESTIONS from "../Questions";
import quizCompletedLogo from "../assets/quiz-complete.png"

function Quiz() {
    const [userAnswers, setUserAnswers ] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswers =>{
            return [...prevUserAnswers, selectedAnswer]
        });
    }

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

    const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswers.map(()=> Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id="answers">
                    {shuffleAnswers.map(answer=>
                        <li key={answer} className="answer">
                            <button onClick={() =>handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;