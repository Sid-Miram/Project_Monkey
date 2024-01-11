import React from 'react'

export default function Result({answer}) {
 let comment;
 if(answer<3){
  comment = "Kya Kar Raha Hai Bhai Tu!!"
 } else if(answer<5){
  comment = "Koi Na Bhai, Nice try!!"
 }else if(answer===5){
  comment="Gangadhar nahi, tu shaktiman h!!"
 }
  return (
    <div className='Container2'>
      <p id='result'> Result </p>
      
      <h2 id='comment'>{comment}</h2>
      
      <h2> Precision Percentage: <span id='precision'>{(answer/5)*100}%</span></h2> 
    </div>
  )
}
