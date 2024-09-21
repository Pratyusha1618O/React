import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Config'
import {logout} from '../../store/AuthSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
  const logoutHandler = () =>{
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button>Logout</button>
  )
}

export default LogoutBtn
