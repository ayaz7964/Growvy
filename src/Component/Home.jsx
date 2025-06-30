import React from "react";
import "../Css/Home.css";

export default function Home() {
  return (
    <div className="Hhome-container">
      <div className="HHeadline">
        <div className="Hhome-left">
          <div className="Hheadline">
            <span className="Hmaximize">Maximize</span>
            <span className="Hbusiness-wrapper">
              <span className="Hbusiness">business efficiency</span>
              <span className="Hwith">with</span>
              <svg
                className="Hellipse"
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="250"
                  cy="60"
                  rx="230"
                  ry="40"
                  stroke="#00C300"
                  // strokeWidth="7"
                  fill="none"
                />
              </svg>
            </span>
            <div className="Hgrowvy">Growvy</div>
            <div className="Hsubtitle">
              Scale your company with tailored strategies, market insights, and
              expert consulting
            </div>
            <button className="btn  stb">Start Today</button>
          </div>
        </div>

        <div className="Hhome-right">
          <div className="Harrow-container">
            <img src="footer.png" alt="Right Arrow" className="arrow" />
            <span className="Hgrowvy-script">Growvy</span>
          </div>
        </div>
      </div>
      <div className="Ha2">
        <div className="Harea"></div>
        <div className="Harea1">
          “Growvy is built to streamline hiring, optimize assets, and drive
          business growth. Our mission is to create a tech-driven ecosystem
          where companies hire smarter, manage resources efficiently, and scale
          effortlessly. Whether you're seeking top talent, asset solutions, or
          business expansion, Growvy is your trusted partner in success.”
        </div>
      </div>

      <div className="hright-area1">
        <div>
          <h1 className="jobsek">I'm a Job Seeker!</h1>
          <p className="htp">
            {" "}
            Looking for job according to my skills and requirements.
          </p>
          <button className="btn jobs">Jobs</button>
        </div>

        <img src="jobs.png" alt="Job Image" className="hjobimage" />
      </div>

      <div className="hright-area1">
        <img src="employ.png" alt="Job Image" className="hjobimage" />

        <div>
          <h1 className="jobsek"> I’m an Employer!</h1>
          <p className="htp">Looking for talented candidates for my company.</p>
          <button className="btn Hbt">Post a Job</button>
        </div>
      </div>
      <div className="hright-area1">
        <div>
          <h1 className="jobsek"> I’m a E-commerce Store!</h1>
          <p className="htp">
            Looking for potential sales data for sales campaign.
          </p>
          <button className="btn Hbt"> Sales Data</button>
        </div>

        <img src="ecommerce.png" alt="E-commerce Image" className="hjobimage" />
      </div>

      <div className="hright-area1">
        <img src="business.png" alt="Business Image" className="hjobimage" />

        <div>
          <h1 className="jobsek"> I’m a Business!</h1>
          <p className="htp">
            Looking for CRM or Data resources to boost my business.
          </p>
          <button className="btn Hbt">Business Plans</button>
        </div>
      </div>

      <div className="HEarea3">
        <p className="HLtext">
          Join Growvy’s 50M+ Job Seeker Community & Get Hired Faster!
        </p>
        <p className="HSText">
          “Build your profile, get noticed by top employers, and access
          exclusive job opportunities tailored to your skills. Your next career
          move starts here!”
        </p>
        <button className="btn Hsignin">Sign In</button>
      </div>
      <img className="imgArea" src="area4.png" alt="Area 4 " />

      <div className="hright-area1">
        <div>
          <h1 className="jobsek">E-commerce Owner?</h1>
          <p className="htp">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>
          <button className="btn pl Hbt"> Plans</button>
        </div>
        <img src="ecom.png" alt="E-commerce Image" />
      </div>

      <div className="hright-area1">
        <img src="person.png" alt="Person Image" className="hjobimage" />

        <div>
          <button className="btn Hbt">Schedule Call Now</button>
          <p className="htp">
            Join over 10k users worldwide. Start scheduling in less than 1
            minutes.
          </p>
        </div>
      </div>
      <div className="footer">
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

        <img src="footer.png" alt="Footer image" className="jfootRightImg " />
      </div>
    </div>
  );
}
