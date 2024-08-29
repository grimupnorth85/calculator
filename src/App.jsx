import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

const App = ()=> {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
})

const numberButtons = [1,2,3,4,5,6,7,8,9,0];
const operatorButtons = ['+','-','*','/'];

const handleClickNumber = (number) => {
  setCalc ({
    ...calc,
    num: calc.num + number,
  });
}

const handleClickOperation = (operator) => {
  
  if (calc.num === "") return;
  
  setCalc ({
    ...calc,
    sign: operator,
    res: calc.res || calc.num,
    num: "",
  });
}

const handleEquals = () => {
  const result = calc.sign === '+' ? parseFloat(calc.res) + parseFloat(calc.num) :
                   calc.sign === '-' ? parseFloat(calc.res) - parseFloat(calc.num) :
                   calc.sign === '*' ? parseFloat(calc.res) * parseFloat(calc.num) :
                   calc.sign === '/' ? parseFloat(calc.res) / parseFloat(calc.num) :
                   calc.res;

  setCalc({
    ...calc,
    res: result,
    num: "",
    sign: ""
  });
}

const handleClear = () => {
  setCalc ({
    sign: "",
    num: "",
    res: 0
  });
}

const display = calc.num || calc.res

return (

<div id="container">
  <h1>my simple calculator</h1>
  <div id ="screen"> {display} {calc.sign}</div>

<div id="visibleButtons">
<div>
  {numberButtons.map(number => (
    <button key={number} onClick={() => handleClickNumber(number)}>
      {number}
    </button>
  ))}
</div>

<div>
  {operatorButtons.map(operator => (
    <button key={operator} onClick={() => handleClickOperation(operator)}>
      {operator}
      </button>
  ))}
</div>

<button onClick={handleEquals}>=</button>

<button onClick={handleClear}>C</button>
</div>
</div>
)
}
export default App
