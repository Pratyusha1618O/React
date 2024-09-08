import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  const addValue = ()=>{
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  const removeValue = ()=>{
    // console.log("clicked", counter);
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter} </button>
    </>
  )
}

export default App
