import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function handleWeight(event) {
    setWeight(event.target.value)
  }
  function handleheight(event) {
    setHeight(event.target.value)
  }
  const output =useMemo(()=>{
    const claculateHeight = height / 100;
    return(weight / (claculateHeight * claculateHeight)).toFixed(1)
  },[weight,height])
  return (
    <main>
      <h1>Project 1 : BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight} kg</p>
        <input type="range" step='1' min='40' max='200' onChange={handleWeight} className="input-slider" />
        <p className="slider-output">Height : {height} cm</p>
        <input type="range" onChange={handleheight} min='40' max='280' className="input-slider" />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  )
}

export default App
