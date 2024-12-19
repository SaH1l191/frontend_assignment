import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

function App() {




  return (
    <div className='min-h-screen'>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>
    </div>
  )
}

export default App
