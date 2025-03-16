import { useRef } from "react";

function Answers({answer, selectedAnswer, answerState, onSelect}) {
    const shuffleAnswers = useRef();
    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answer];
        shuffleAnswers.current.map(()=> Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {
                shuffleAnswers.current.map(answer => {
                    const isSelected = selectedAnswer === answer;

                    let cssClass = "";
                    if (answerState === "answered" && isSelected) {
                        cssClass = "selected"
                    }

                    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                        cssClass = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button onClick={() => onSelect(answer)} className={cssClass} disabled={ answerState !== ''}>
                                {answer}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Answers;