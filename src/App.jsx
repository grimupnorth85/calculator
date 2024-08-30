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
    {[...numberButtons, ...operatorButtons, '=', 'C'].map((item, index) => (
      <button
        key={index}
        onClick={() => 
          typeof item === 'number' 
            ? handleClickNumber(item) 
            : item === '=' 
              ? handleEquals() 
              : item === 'C' 
                ? handleClear() 
                : handleClickOperation(item)
        }
      >
        {item}
      </button>
    ))}
  </div>
</div>
)
}
export default App
