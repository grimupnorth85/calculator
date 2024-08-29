import { useState } from 'react'
import { evaluate} from 'mathjs'
import './App.css'

const App = ()=> {
  const [count, setCount] = useState(0)

  // add
  const add = () => {
    setCount(count + 1)
  }
  // subtract
  const subtract = () => {
    if (count > 0)
    setCount(count - 1)
    }

  return (
    <div id="sum">
      <button onClick={subtract}>-</button>
      <h1>  {count}  </h1>
      <button onClick={add}>+</button>
    </div>
  )
}

export default App
