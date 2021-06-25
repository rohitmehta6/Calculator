import React, { useState } from 'react';
import { evaluate } from "mathjs";


const App = () => {


  const [expression, setExpression] = useState("0");

  let time = new Date().toLocaleTimeString();

  let [ctime, setTime] = useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000);


  const handleClick = (value) => {
    let newExpression = expression + value;
    if (newExpression[0] === "0" && newExpression[1] !== '.') {
      newExpression = newExpression.substr(1, newExpression.length);
    }

    setExpression(newExpression);
  }

  const clearDisplay = () => {
    setExpression("0");
  }

  const deleteKey = () => {
    let lengthExpr = expression.length;
    if (lengthExpr > 1)
      setExpression(expression.substr(0, lengthExpr - 1));
    else {
      setExpression("0");
    }
  }

  const result = () => {
    try {
      let total = evaluate(expression);
      setExpression(+total.toFixed(2));
    }
    catch (err) {
      setExpression("Invalid Expression");
    }
  }


  return (
    <>
      <div className="main-container">
        <div className="inner-container">

          <div className="top">

            <span>{ctime}</span>
            <div className="icons">
              <i className="fa fa-signal" aria-hidden="true"></i>
              <i className="fa fa-wifi" aria-hidden="true"></i>
              <i className="fa fa-battery-three-quarters" aria-hidden="true"></i>
            </div>
          </div>

          <div className="display">{expression}
          </div>

          <div className="btns">

            <div className="row">
              <button className="func" onClick={clearDisplay}>AC</button>
              <button className="func" onClick={deleteKey}>Del</button>
              <button className="func" onClick={result}>=</button>
              <button className="operator" onClick={() => handleClick("/")}>/</button>
            </div>

            <div className="row">
              <button id="7" onClick={() => handleClick("7")}>7</button>
              <button id="8" onClick={() => handleClick("8")}>8</button>
              <button id="9" onClick={() => handleClick("9")}>9</button>
              <button className="operator" onClick={() => handleClick("*")}>*</button>
            </div>

            <div className="row">
              <button id="4" onClick={() => handleClick("4")}>4</button>
              <button id="5" onClick={() => handleClick("5")}>5</button>
              <button id="6" onClick={() => handleClick("6")}>6</button>
              <button className="operator" onClick={() => handleClick("-")}>-</button>
            </div>

            <div className="row">
              <button id="1" onClick={() => handleClick("1")}>1</button>
              <button id="2" onClick={() => handleClick("2")}>2</button>
              <button id="3" onClick={() => handleClick("3")}>3</button>
              <button className="operator" onClick={() => handleClick("+")}>+</button>
            </div>

            <div className="row">
              <button id="zero" onClick={() => handleClick("0")}>0</button>
              <button id="dot" onClick={() => handleClick(".")}>.</button>
              <button className="operator" onClick={() => handleClick("%")}>%</button>
            </div>

          </div>

          <div className="bottom">

          </div>
        </div>
      </div>


    </>
  )
}

export default App
