import React from 'react'
import {redirect, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavbBar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from './context/ScrollToTop'
import FadeAnimate from './context/FadeAnimate'
import Error404 from './pages/Error404'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='bg-[#F0EFF5]'>  
      
      <div className=''>
      <ToastContainer/>
      <ScrollToTop/>
      <FadeAnimate/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/index.html' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error404/>} />
      </Routes>
        </div>
        
      <nav class="fixed w-full top-0 left-0">
        <NavBar />
      </nav>
      
      <div className='w-full'>
        <Footer/>
      </div>
        
    </div>
  )
}

export default App