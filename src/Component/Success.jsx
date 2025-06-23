import React from "react";
import "../Css/Success.css";

export default function Success() {
  return (
    <div>
      <div className="phead">
        <p className="prcing"> Success</p>
        <p className="pHeadText">
          "Discover inspiring Success Stories—see how our solutions empower
          businesses to thrive!"
        </p>
      </div>
      <div className="Shead">
        <p className="sht"> Join over 10k Clients worldwide</p>
        <button className="btn">View Pricing</button>
        <img src="head1Image.png" alt="Head Image" />
      </div>

      <div>
        <img src="head2Image.png" alt="Head Image" />
      </div>
      <div className="ps">
        <p className="pst">
          “Build your profile, get noticed by top employers, and access
          exclusive job opportunities tailored to your skills. Your next career
          move starts here!”
        </p>
        <button className="btn">Sign In</button>
        <img src="psImage.png" alt=" Ps Image" />
      </div>
      <img src="area4.png" alt="Area Image" />

       <div className="footer">
        <div className="footLeftS">
          <h1>Growvy</h1>
          <p>
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
        <div className="footCenterS">
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
        <div className="footRightS">
          <img src="footer.png" alt="Footer image" />
        </div>
      </div>
    </div>
  );
}
