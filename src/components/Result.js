import React from 'react';

export default function Result({ answer }) {
  let comment;
  switch (true) {
    case answer < 3:
      comment = 'Kya Kar Raha Hai Bhai Tu!!';
      break;
    case answer < 5:
      comment = 'Koi Na Bhai, Nice try!!';
      break;
    case answer === 5:
      comment = 'Gangadhar nahi, tu shaktiman h!!';
      break;
    default:
      comment = 'Some default comment';
  }

  const precisionPercentage = ((answer / 5) * 100).toFixed(2) + '%';

  return (
    <div className='Container2'>
      <p id='result'> Result </p>
      <h2 id='comment'>{comment}</h2>
      <h2> Precision Percentage: <span id='precision'>{precisionPercentage}</span></h2>
    </div>
  );
}
