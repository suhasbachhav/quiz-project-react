import { useState, useCallback } from "react";
import QUESTIONS from "../Questions";
import quizCompletedLogo from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

function Quiz() {
    const [answerState, setAnswerState ] = useState('');
    const [userAnswers, setUserAnswers ] = useState([]);

    const activeQuestionIndex =  answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers(prevUserAnswers =>{
            return [...prevUserAnswers, selectedAnswer]
        });
        setTimeout(()=>{
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
            setTimeout(()=>{
                setAnswerState('')
            }, 2000)

        }, 1000);
        
    }, [activeQuestionIndex])

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
            <div id="question">
                <QuestionTimer 
                key={activeQuestionIndex}
                timeout={10000} 
                onTimeout={handleSkipAnswer}/>
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <Answers 
                key={activeQuestionIndex}
                answer={QUESTIONS[activeQuestionIndex].answers}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    );
}

export default Quiz;