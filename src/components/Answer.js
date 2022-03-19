import React from "react";

export default function Answer(props){
    const styles = {
        backgroundColor: props.answer.isSelected ? "#D6DBF5" : "#F5F7FB"
    }
    return (
        <div style={styles} className="question--answer" onClick={props.handleClick}>{props.answer.answer}</div>
        
    )
}