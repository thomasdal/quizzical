import React, { useEffect, useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(){
    const [questions, setQuestions] = useState([])
    const [correctCount, setCorrectCount] = useState(0)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    },[])

    const questionElements = questions.map(question => {
        return <Question item={question} correctCount={correctCount} setCorrectCount={setCorrectCount} key={nanoid}/>
    })

    return (
        <main className="questionContainer">
            {questionElements}
            <button className="answerButton">Check answers</button>
            <p>{correctCount}</p>
        </main>
    )
}