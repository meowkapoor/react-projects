import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);

  const addValue = () => {
    count >= 20 ? setCount(20) : setCount(count + 1);
  }

  const subValue = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }

  return (
    <>
      <h1>coffee & code</h1>
      <h2>counter value is {count} where max is 20 and min is 0</h2>

      <button onClick={addValue}>Increase from {count}</button>
      <br />
      <button onClick={subValue}>Decrease from {count}</button>
    </>
  )
}

export default App
