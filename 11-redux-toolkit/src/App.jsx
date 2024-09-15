import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-yellow-200 font-bold'>Learn Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

