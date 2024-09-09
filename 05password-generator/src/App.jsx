import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = ""; //generated password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //A-Z a-z

    if (numberAllowed) {
      str = str + "0123456789";
    }

    if (charAllowed) {
      str = str + "~!@#$%^&*(){}[]`";
    }

    //jotota lengh totobar loop cholbe
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // index value   
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder='password'
            readOnly

          />

          <button className='outline-none bg-blue-700 text-white px-3 py-1'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} //****
            />

            <label>length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1"></div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed} //****
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); //****
            }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <div className="flex items-center gap-x-1"></div>
          <input
            type="checkbox"
            defaultChecked={charAllowed} //****
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev); //****
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>



      </div>

    </>
  )
}

export default App
