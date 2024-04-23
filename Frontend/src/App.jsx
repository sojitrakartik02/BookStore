import React from 'react';

import './index.css'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup';
const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </div>

    </>
  )
}

export default App
