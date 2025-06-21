import React from 'react'
import '../Css/NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div className="conatiner">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/success">Success</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
