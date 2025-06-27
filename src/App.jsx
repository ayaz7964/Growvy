import React from 'react'
import NavBar from './Component/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Jobs from './Component/Jobs'
import Services from './Component/Services'
import Pricing from './Component/Pricing'
import Success from './Component/Success'
import Footer from './Component/Footer'
export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
      </div>
      
    </div>
  )
}