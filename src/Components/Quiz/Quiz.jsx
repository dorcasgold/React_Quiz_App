import React, { useState } from "react"
import './Quiz.css'
import { data } from "../../assets/data";


function Quiz() {
  // create & initialize index state 
  let [index, setIndex] = useState(3);
  // create & initialize  question state
  let [question, setQuestion] = useState(data[index])



  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {/* dynamically display the question and its corresponding answer options based on the current index. */}
      <h2>{index + 1}.{question.question}</h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz