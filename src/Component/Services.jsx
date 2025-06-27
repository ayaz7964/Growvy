import React from "react";
import "../Css/Services.css";

export default function Services() {
  return (
    <div className="serviceContainer">
      <div className="Jobheadline">
        <h1 className="head">Services</h1>
        <p className="para">
          {" "}
          At Growvy, we provide innovative, cost-effective solutions to help
          businesses and professionals thrive.
        </p>
      </div>
      <div className="headImageS">
        <div className="headConB">
          <img src="headImageS1.png" alt="HeadImage" className="headImage" />
          <button className="btn ha">Plans</button>
        </div>
         <div className="headConB">
          <img src="headImageS2.png" alt="HeadImage" className="headImage" />
          <button className="btn ha">Plans</button>
        </div>
         <div className="headConB">
          <img src="headImageS3.png" alt="HeadImage" className="headImage" />
          <button className="btn ha">Plans</button>
        </div>

        {/* <img src="headImageS2.png" alt="Head Image 2 " />
        <img src="headImageS3.png" alt="Head Image 3 " /> */}
      </div>
      
      <div className="Sbanner">
        <p className="LSText">Join over 10k users worldwide</p>
        <button className="btn vbp"> View Pricing</button>
      </div>
      <div className="pibContainer">
        <div>
          <p className="pih">Problems in Hiring</p>
          <p className="pipara">
            Companies spend high <span>$$$</span> budgets on job portals like
            Indeed and LinkedIn, only to receive low-quality CVs and irrelevant
            applicants, making hiring slow and inefficient.
          </p>
        </div>

        <img src="pibImage.png" alt="Pib Image" />
      </div>

      <div className="gsCon">
        <img src="gsImage.png" alt="GS Image" />
        <div className="gsTC">
          <span className="gsT">With Growvy Solution</span>
          <p className="gsp">
            With Growvy, businesses can access a database of active job seekers
            who have recently joined for job search. Use advanced filters to
            find the right candidates quickly and at a fraction of the cost—no
            wasted budget, just quality hires!
          </p>
          <button className="btn gsb">Start Now</button>
        </div>
      </div>

      <div className="pibContainer">
        <div>
          <p className="pih"> E-commerce Business</p>
          <p className="pipara">
            E-commerce businesses struggle with high marketing costs,
            inefficient operations, and slow growth, making it difficult to
            scale and maximize profits.
          </p>
        </div>

        <img src="esbImage.png" alt="ESB Image" />
      </div>

      <div className="gsCon">
        <img src="gsbImage.png" alt="GS Image" />
        <div className="gsTC">
          <span className="gsT">With Growvy Solution</span>
          <p className="gsp">
            Growvy helps e-commerce businesses streamline operations, manage
            assets, and implement smart growth strategies to boost sales and
            efficiency—all at a low cost with proven results.
          </p>
          <button className="btn gsb">Start Now</button>
        </div>
      </div>

      <div className="PCon">
        <div className="personImageS">
          <img src="person.png" alt="Person Image" />
        </div>
        <div className="personS">
          <button className="btn shbtn">Schedule Call Now</button>
          <p className="perText"> 
            Join over 10k users worldwide. Start scheduling in less than 1
            minutes.
          </p>
        </div>
      </div>
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

        <img src="footer.png" alt="Footer image" className="jfootRightImg" />
      </div>
    </div>
  );
}
