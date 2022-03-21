import React, { useEffect, useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

export default function Quiz(){
    const [questions, setQuestions] = useState([])
    const [correctCount, setCorrectCount] = useState(0)
    const [isChecked, setIsChecked] = useState(false)
    const [triggerFetch, setTriggerFetch] = useState(false)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(
                data.results.map(question => {
                    return {
                        ...question,
                        isCorrect: false,
                        id: nanoid()
                    }
                })
                ))
    },[triggerFetch])

    function setCorrect(id, bool){
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                return question.id === id ?
                    {...question, isCorrect: bool} :
                    question
            })
        })
    }

    function handleClick(){
        setCorrectCount(questions.filter(question => question.isCorrect).length)
        setIsChecked(true)
    }

    function resetState(){
        setCorrectCount(0)
        setIsChecked(false)
        setTriggerFetch(prevVal => !prevVal)
    }

    const questionElements = questions.map(question => {
        return <Question isChecked={isChecked} item={question} setCorrect={setCorrect} key={question.id}/>
    })

    return (
        <main className="questionContainer">
            {correctCount === 5 && <ReactConfetti/>}
            {questionElements}
            <div className="buttonContainer">
                {isChecked && <p>You scored {correctCount}/5 correct answers</p> }
                <button onClick={isChecked ? resetState : handleClick} className="answerButton">{isChecked ? "Play again" : "Check answers"}</button>
            </div>
            
        </main>
    )
}