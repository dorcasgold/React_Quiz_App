import React from "react"

import './Quiz.css'
function Quiz() {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>In what year was the first iPhone released?</h2>
      <ul>
        <li>2003</li>
        <li>2005</li>
        <li>2000</li>
        <li>2007</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz