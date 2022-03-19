import React, { useEffect, useState } from "react";
import arrayShuffle from "array-shuffle";
import { nanoid } from "nanoid";
import Answer from "./Answer";

export default function Question(props){
    const [answers, setAnswers] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    
    useEffect(() => {
        const generatedAnswers =
            props.item.incorrect_answers.map(answer => {
                return {
                    answer: answer,
                    id: nanoid(),
                    isSelected: false
                }
            })
        generatedAnswers.push({
            answer: props.item.correct_answer,
            id: nanoid(),
            isSelected: false
        })
        setAnswers(arrayShuffle(generatedAnswers))
    }, [])

    function selectAnswer(id){
        setAnswers(prevAnswers => {
            return prevAnswers.map(answer =>
                answer.id === id ?
                {...answer, isSelected: true} :
                {...answer, isSelected: false})
        })
    }

    //if (foreach answer there is one answer where isSelected is equal to item.correct_answer)
    //then correct answer

    const answerElements = answers.map(answer => {
        return <Answer key={answer.id} answer={answer} handleClick={() => selectAnswer(answer.id)}/>
    })

    return (
        <section className="question">
            <h1 className="question--title">{props.item.question}</h1>
            <div className="question--answers">
                {answerElements}
            </div>
            <hr />
        </section>
    )
}