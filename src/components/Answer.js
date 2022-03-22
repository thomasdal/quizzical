import React from "react";

export default function Answer(props){
    const styles = getStyles()
    
    function getStyles(){
        //answers are not checked - selected blue, not selected white
        if(!props.isChecked && props.answer.isSelected){
            return {
                backgroundColor: props.answer.isSelected ? "#D6DBF5" : "#F5F7FB"
            }
        //answers are checked
        } else if (props.isChecked){
        //if the answer is selected, if it is correct then green, else red
            if (props.answer.isSelected) {
                return {
                    backgroundColor: props.answer.isCorrect ? "#94D7A2" : "#F8BCBC"
                }
        //if the answer is not selected, but is correct, then green, else white
            } else if(!props.answer.isSelected){
                return {
                    backgroundColor: props.answer.isCorrect ? "#94D7A2" : "#F5F7FB",
                    opacity: 0.5
                }
                
            }
        }
    }


    return (
        <div style={styles} className="question--answer" onClick={props.handleClick}>{props.answer.answer}</div>
        
    )
}
