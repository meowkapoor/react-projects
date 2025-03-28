import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black rounded-xl p-4 mb-5'>Tailwind Test</h1>
      <Card subjectName='DSA' description='using java'/>
      <Card subjectName='Backend' description='using javascript'/>
    </>
  )
}

export default App
