import React, { useState } from 'react'
import questions from '../questions'
import Result from './Result' 


export default function QuestionBox({data,length}) {
const [currentQuestion, setCurrentQuestion] = useState(0)
const [correctAnswers, setCorrectAnswers] = useState(0)
const [highlighted, setHighlighted] = useState(false)
const {text, options} = questions[currentQuestion]

const updateHandler = function(isCorrect){
  if(isCorrect == true){
    setCorrectAnswers((prev)=> prev+1)
    
  }
  setCurrentQuestion((prev)=> prev+1)
  
}
let highlightHandler = function(){
  if(highlighted == false){
    setHighlighted((prev)=> prev = true)
  }else{
    alert("Already Highlightere Applied")
  }
}

let rHighlightHandler = function(){
  if(highlighted ==true){
  setHighlighted((prev)=> prev = false)
  }else{
    alert("Already Highlightere Removed")
  }
} 

if(currentQuestion==length-1){
  return(<Result answer = {correctAnswers}/>)
}


return (
  <div className='Container1'>
  <p><span id='currentQuestion'>0{currentQuestion+1}</span><span id='totalQuestions'>/0{length}</span></p>
  {/* neither this */}
  {/* < print  {data[currentQuestion]}/> */}
  {/* nor this printing using CurrentQuestion Component */}
  {/* <print {...data[currentQuestion]}/> */}
  <h2 style = {{color: highlighted? 'red': null}} >{text}</h2>  
  <ul>
    {options.map((item,i)=> (
      <li key={i} idd = {item.id} onClick = {() =>updateHandler(item.isCorrect)} >{item.text}</li>
    ))}
  </ul>
  <div className='highlighters'>
  <button onClick = {highlightHandler} id='high'>Highlight</button>
  <button onClick = {rHighlightHandler} id='rHigh'>Remove Highlight</button>
  </div>
  </div>
)
}
