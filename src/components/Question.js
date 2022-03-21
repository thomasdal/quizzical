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
                    isSelected: false,
                    isCorrect: false
                }
            })
        generatedAnswers.push({
            answer: props.item.correct_answer,
            id: nanoid(),
            isSelected: false,
            isCorrect: true
        })
        setAnswers(arrayShuffle(generatedAnswers))
    }, [])

    function selectAnswer(id){
        if(!props.isChecked)
        {
            setAnswers(prevAnswers => {
                return prevAnswers.map(answer =>
                    answer.id === id ?
                    {...answer, isSelected: true} :
                    {...answer, isSelected: false})
            })
        }
    }

    useEffect(() => {
        if (answers.some(answer => answer.answer === props.item.correct_answer && answer.isSelected)){
            props.setCorrect(props.item.id, true)
        } else {
            props.setCorrect(props.item.id, false)
        }
    }, [answers])

    const answerElements = answers.map(answer => {
        return <Answer isChecked={props.isChecked} key={answer.id} answer={answer} handleClick={() => selectAnswer(answer.id)}/>
    })

    return (
        <section className="question">
            <h1 className="question--title">{props.item.question.replace(/&quot;/g, '"')}</h1>
            <div className="question--answers">
                {answerElements}
            </div>
            <hr />
        </section>
    )
}