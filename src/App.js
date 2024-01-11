import React, { useEffect, useState } from "react";
import "./App.css"; 
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [andheraKayamRahega, setAndheraKayamRahega] = useState(false);
  const [shaktiman, setShaktiman] = useState("Dark");

  useEffect(() => {
    document.body.style.backgroundImage = andheraKayamRahega
      ? 'linear-gradient(to top, #09203f 0%, #537895 100%)'
      : 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)';

      document.body.style.color = andheraKayamRahega
      ? 'rgb(9, 104, 120)'
      : 'black'
  }, [andheraKayamRahega]);

  let modeChanger = function () {
    setAndheraKayamRahega((prev) => !prev);
    setShaktiman((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <div>
      <QuestionBox data={questions} length={questions.length} />
      <button onClick={modeChanger} id='darLiButton'>{shaktiman}</button>
    </div>
  );
}

export default App;
