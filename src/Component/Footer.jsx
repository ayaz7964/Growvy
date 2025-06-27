import React from 'react'
import '../Css/Footer.css'

export default function Footer() {
  return (
      <div className="Footer">
        <div className="jfootLeft">
          <h1 className="jt1">Growvy</h1>
          <p className="jt2">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>
          <div className="icon">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="jfootCenter">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Plans & Pricing</li>
            <li>Business Solutions</li>
            <li>Success Stories</li>
            <li> Jobs</li>
          </ul>
          <p>⭐⭐⭐⭐⭐ </p>
        </div>
        <div className="jfootRight">
          <img src="footer.png" alt="Footer image" />
        </div>
      </div> 
  )
}
