import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/Auth"

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true) //jodi loading hoy tahole loading dekhane noyto data dekhabe
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()

  // }, [])

  return (
    <>
      <h1>A Blog app with Appwrite</h1>
    </>
  )
}

export default App
