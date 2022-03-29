import React from "react";

export default function Frontpage(props){
    return (
        <main className="frontpage">
            <h1 className="frontpage--title">Quizzical</h1>
            <h3 className="frontpage--desc">- Now with CI/CD Pipeline</h3>
            <button onClick={props.start} className="frontpage--button">Start quiz</button>
        </main>
    )
}
