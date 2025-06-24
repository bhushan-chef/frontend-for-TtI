import { useContext, useState } from 'react'

import Result from './Pages/Result'
import Home from './Pages/Home'
import BuyCredit from './Pages/BuyCredit'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

import React from 'react';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {Showlogin} = useContext(AppContext)          

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <NavBar/>
    {Showlogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/Buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
