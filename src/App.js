import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [inputArrayTwo, setInputArrayTwo] = useState([]);
  const [operator, setOperator] = useState(null)

  const handleClick = (number) => {
    setInputArray((prev) => [...prev, number]);
  };
  const handleClickTwo = (number) => {
    setInputArrayTwo((prev) => [...prev, number]);
  };

  function handleReset() {
    setInputArray([]);
    setInputArrayTwo([]);
    setOperator(null);
  }

  const handleOperator = (op) => {
    setOperator(op);
  }

  function handleDel() {
    inputArray.pop();
    setInputArray((prev) => [...prev]);
  }
  function handleDelTwo() {
    inputArrayTwo.pop();
    setInputArrayTwo((prev) => [...prev]);
  }
  function handleEquals() {
    const num1 = parseInt(displayValue);
    const num2 = parseInt(displayValueTwo);

    let result = 0;
    if (operator === '+') result = num1 + num2;
    if (operator === '-') result = num1 - num2;
    if (operator === '*') result = num1 * num2;
    if (operator === '/') result = num1 / num2;
    setInputArray(String(result).split(''))
    setOperator(null);
    setInputArrayTwo([]);
  }

  const displayValue = inputArray.join('');
  const displayValueTwo = inputArrayTwo.join('');

  const calcBtn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
    <button className="calc-btn" key={num} onClick={() => handleClick(num)}>
      {num}
    </button>));

const calcBtnTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
  <button className="calc-btn" key={num} onClick={() => handleClickTwo(num)}>
    {num}
  </button>))
  ;

  return (
    <div>
      <div className="input-display">
      <h2>{displayValue}
      <br></br>{operator}
      <br></br>{displayValueTwo}</h2>
      </div>
      <div className="calc-display">
        1st Number: {calcBtn}
        <button className="del-btn" onClick={handleDel}>Delete</button>
        <div className="op-btn">
          <br></br>
        <button onClick={() => handleOperator('+')}>+</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
        <button className="equals-btn" onClick={handleEquals}>=</button>
        <br></br>
        </div>
        Second Number: {calcBtnTwo}<button className="del-btn" onClick={handleDelTwo}>Delete</button>
      </div>
      
    </div>
  );
}

export default App;
