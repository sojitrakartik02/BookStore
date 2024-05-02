import React from 'react';

import './index.css'
import Home from './home/Home'
import { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup';
import { useAuth } from './context/AuthProvider';
function App  ()  {
  const [authUser,setAuthUser]=useAuth()
    console.log(authUser)
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path="/course" 
        element={authUser ? <Courses />:<Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
      </div>

    </>
  )
}

export default App
