import React from "react";
import "../Css/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="Headline">
        <div className="home-left">
          <div className="headline">
            <span className="maximize">Maximize</span>
            <span className="business-wrapper">
              <span className="business">business efficiency </span>
              <svg className="ellipse" width="480" height="150">
                <ellipse
                  cx="250"
                  cy="85"
                  rx="210"
                  ry="60"
                  stroke="#00C300"
                  strokeWidth="7" 
                  fill="none"
                />
              </svg>

              <span className="with">with</span>
            </span>
            {/* <span className="efficiency"></span> */}
          </div>
          <div className="growvy">Growvy</div>
          <div className="subtitle">
            Scale your company with tailored strategies, market insights, and
            expert consulting
          </div>
          <button className="btn">Start Today</button>
        </div>
        <div className="home-right">
          <div className="arrow-container">
            <img src="footer.png" alt="Right Arrow" className="arrow" />

            <span className="growvy-script">Growvy</span>
          </div>
        </div>
      </div>
      {/* <div className="area"></div>
        <div className="area1">
          “Growvy is built to streamline hiring, optimize assets, and drive
          business growth. Our mission is to create a tech-driven ecosystem
          where companies hire smarter, manage resources efficiently, and scale
          effortlessly. Whether you're seeking top talent, asset solutions, or
          business expansion, Growvy is your trusted partner in success.”
        </div>
        <div className="right-area1">
          <h1>I'm a Job Seeker!</h1>
          <p> Looking for job according to my skills and requirements.</p>
          <button className="btn jobs">Jobs</button>
        </div>
        <div className="jobimage">
          <img src="jobs.png" alt="Job Image" />
        </div>
        <div className="empimage">
          <img src="employ.png" alt="Job Image" />
        </div>
        <div className="employ">
          <h1> I’m an Employer!</h1>
          <p>Looking for talented candidates for my company.</p>
          <button className="btn">Post a Job</button>
        </div>
        <div className="Ecomerce">
          <h1> I’m a E-commerce Store!</h1>
          <p>Looking for potential sales data for sales campaign.</p>
          <button className="btn"> Sales Data</button>
        </div>
        <div className="Ecomerceimage">
          <img src="ecommerce.png" alt="E-commerce Image" />
        </div>
        <div className="bussinessImage">
          <img src="business.png" alt="Business Image" />
        </div>
        <div className="bussiness">
          <h1> I’m a Business!</h1>
          <p>Looking for CRM or Data resources to boost my business.</p>
          <button className="btn">Business Plans</button>
        </div>
        <div className="area3">
          <p className="Ltext">
            Join Growvy’s 50M+ Job Seeker Community & Get Hired Faster!
          </p>
          <p className="SText">
            “Build your profile, get noticed by top employers, and access
            exclusive job opportunities tailored to your skills. Your next
            career move starts here!”
          </p>
          <button className="btn signin">Sign In</button>
        </div>
        <div className="area4">
          <img className="imgArea" src="area4.png" alt="Area 4 " />
        </div>
        <div className="ecom">
          <h1>E-commerce Owner?</h1>
          <p>
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>
          <button className="btn ebtn"> Plans</button>
        </div>
        <div className="ecomImage">
          <img src="ecom.png" alt="E-commerce Image" />
        </div>

        <div className="footer">
          <div className="personImage">
            <img src="person.png" alt="Person Image" />
          </div>
          <div className="person">
            <button className="btn">Schedule Call Now</button>
            <p>
              Join over 10k users worldwide. Start scheduling in less than 1
              minutes.
            </p>
          </div>
          <div className="footLeft">
            <h1>Growvy</h1>
            <p>
              Optimize your business with smart asset management, growth
              strategies, and cutting-edge solutions to boost sales and
              efficiency with Growvy!
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
          <div className="footCenter">
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
          <div className="footRight">
            <img src="footer.png" alt="Footer image" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
