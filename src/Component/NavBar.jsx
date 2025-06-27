// import React from 'react'
// import '../Css/NavBar.css'
// import { Link } from 'react-router-dom'

// export default function NavBar() {
//   return (
//     <div>
//       <div className="conatinerN">
//         <nav className="navbar">
//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/jobs">Jobs</Link>
//             </li>
//             <li>
//               <Link to="/success">Success</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/pricing">Pricing</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react'
import '../Css/NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHamburgerClick = () => setMenuOpen(!menuOpen)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <div className="container">
      <nav className="navbar">
        <div className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle navigation" tabIndex={0}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/jobs" onClick={handleLinkClick}>Jobs</Link>
          </li>
          <li>
            <Link to="/success" onClick={handleLinkClick}>Success</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/pricing" onClick={handleLinkClick}>Pricing</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}