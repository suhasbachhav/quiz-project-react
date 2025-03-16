import { useState } from "react";

function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex ] = useState(0);
    const [userAnswers, setUserAnswers ] = useState([]);
    return (
        <p>Currently active questions</p>
    );
}

export default Quiz;