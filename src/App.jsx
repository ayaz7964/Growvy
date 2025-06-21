import React from 'react'
import NavBar from './Component/NavBar'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'


export default function App() {
  return (
    <div>
      <NavBar />
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jobs" element={<h1>Jobs Page</h1>} />
          <Route path="/success" element={<h1>Success Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/pricing" element={<h1>Pricing Page</h1>} />
        </Routes>
      {/* </Router> */}

      
    </div>
  )
}
