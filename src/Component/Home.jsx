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
            <svg className="arrow-svg" width="500" height="300">
              <polyline
                points="20,250 200,100 350,200 480,20"
                fill="none"
                stroke="#00C300"
                strokeWidth="20"
                strokeLinejoin="round"
              />
            </svg>

            <span className="growvy-script">Growvy</span>
          </div>
        </div>

        <div className="area"></div>
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
          <p>Looking for CRM or Data resources
 to boost my business.</p>
          <button className="btn">Business Plans</button>
        </div>
    </div>
    </div>
  );
}
