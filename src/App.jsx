import React, { useState } from 'react'
import { Button } from './components/Button'


function Calculator() {
  const [input, setInput] = useState('')

  const handleInput = (text) => {
    setInput(input + text)
    console.log(input)
    console.log(text)

  };

  const handleClear = () => {
    setInput('')
  }

  const handleCalcular = () => {
   setInput(eval(input))
  }

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly/>
      <div className="buttons">
        <Button text="0" onClick={handleInput} />
        <Button text="1" onClick={handleInput} />
        <Button text="2" onClick={handleInput} />
        <Button text="3" onClick={handleInput} />
        <Button text="+" onClick={handleInput} />
        <Button text="4" onClick={handleInput} />
        <Button text="5" onClick={handleInput} />
        <Button text="6" onClick={handleInput} />
        <Button text="-" onClick={handleInput} />
        <Button text="7" onClick={handleInput} />
        <Button text="8" onClick={handleInput} />
        <Button text="9" onClick={handleInput} />
        <Button text="*" onClick={handleInput} />
        <Button text="." onClick={handleInput} />
        <Button text="=" onClick={handleCalcular} />
        <Button text="🗑" onClick={handleClear} />
      </div>
    </div>
  )
}

export default Calculator
