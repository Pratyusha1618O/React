import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/Auth"
import { login, logout } from "./store/AuthSlice"
import { Header, Footer} from './components/Index'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true) //jodi loading hoy tahole loading dekhane noyto data dekhabe
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser() //Auth.js er moddhe banano hoechilo // jodi user paoa jay then...
    .then((userData) => { // user data take neoa holo
      if(userData){ // jodi user data thake then
        dispatch(login({userData})) //login dispatch kora holo
      }
      else{
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))

  }, [])

  return !loading ? (
    <div className='min-h-screen bg-cyan-600'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
