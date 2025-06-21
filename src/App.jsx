import React from 'react'
import NavBar from './Component/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'


export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jobs" element={<h1>Jobs Page</h1>} />
          <Route path="/success" element={<h1>Success Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/pricing" element={<h1>Pricing Page</h1>} />
        </Routes>
      </div>
      
    </div>
  )
}