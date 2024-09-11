import { useState } from 'react'
import './App.css'
import './components/InputBox'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  return (
    <>
      <h1>Currency App</h1>
      <InputBox/>
    </>
  )
}

export default App
