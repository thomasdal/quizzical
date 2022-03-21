import React from "react";

export default function Answer(props){
    // props.answer.isCorrect
    // props.isChecked
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

    
        //before answers are checked
        // backgroundColor: props.answer.isSelected ? "#D6DBF5" : "#F5F7FB",

        //answer is incorrect, the answer has not been selected, the answers have been checked (grey)
        // backgroundColor: !props.answer.isCorrect && !props.answer.isSelected && props.isChecked ? "#000" : props.answer.isCorrect && props.answer.isSelected && props.isChecked ? "#94D7A2" : "#F8BCBC"
        // props.answer.isSelected ? "#D6DBF5" : "#F5F7FB"
        
        //the answer is correct, is selected, and answers are checked
        // backgroundColor: props.answer.isCorrect && props.answer.isSelected && props.isChecked ? "#94D7A2" : "#F8BCBC"
        
    

    //if is selected then
    //  if isChecked then
    //    if isCorrect then
//         green
//        else
//         red
//       else
//        grey
//    else
//     white


    return (
        <div style={styles} className="question--answer" onClick={props.handleClick}>{props.answer.answer}</div>
        
    )
}