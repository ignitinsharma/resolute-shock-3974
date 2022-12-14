import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Singup from '../Pages/Singup'

function Allroutes() {
  return (
   <Routes>
     <Route path="/" element={ <Home/> }  />
     <Route path="/login" element={ <Login/> }  />
     <Route path="/signup" element={ <Singup/> }  />
   </Routes>
  )
}

export default Allroutes