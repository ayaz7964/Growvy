import React from "react";
import "../Css/Jobs.css";

export default function Jobs() {
  return (
    <div className="jobs-container">
      <div className="Jobheadline">
        <h1 className="head">Jobs</h1>
        <p className="para">
          {" "}
          "Join our team and shape the future—explore exciting career
          opportunities today!"
        </p>
      </div>
      <div className="btns">
        <button className="h">Tech</button>
        <button className="h">Management</button>
        <button className="h"> Human Resource</button>
        <button className="h"> Marketing & Sales</button>
        <button className="h">Accounts & Finance</button>
        <button className="h">Customer Service</button>
      </div>
      <div className="jarea3">
        <p className="jLtext">
          Join Growvy’s 50M+ Job Seeker Community & Get Hired Faster!
        </p>
        <p className="jSText">
          “Build your profile, get noticed by top employers, and access
          exclusive job opportunities tailored to your skills. Your next career
          move starts here!”
        </p>
        <button className="btn jsignin">Sign In</button>
      </div>

      <div>
        <p className="topJob">Top Jobs</p>
        <div className="job-con">
          <div className="job">
            <p className="Job-text">Business Developer</p>
            <button className="btn jbtn">Apply Now </button>
          </div>

          <div className="job">
            <p className="Job-text">Finance Manager</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Human Resource Manager</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Software Engineer</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text" >Web Developer</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text"> Graphic Designer / Ui / Ux</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">SEO Expert</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Android Developer</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text" >Floor Manager</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text"> Sales Representative</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Data Entry Operator</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Delivery Man</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Urdu / English Call Center Agent</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text"> Morning Shift Jobs for Females</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
          <div className="job">
            <p className="Job-text">Accountant</p>
            <button className="btn jbtn">Apply Now </button>
          </div>
        </div>

        <div className="jarea4">
          <img className="jimgArea" src="area4.png" alt="Area 4 " />
        </div>
        </div>

        <div className="jright-area1">
          <h1>I'm a Job Seeker!</h1>
          <p> Looking for job according to my skills and requirements.</p>
          <button className="btn jobs">Jobs</button>
        </div>
        <div className="jjobimage">
          <img src="jobs.png" alt="Job Image" />
        </div>

        <div className="footer">
          
          <div className="jfootLeft">
            <h1 className="jt1">Growvy</h1>
            <p className="jt2">
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
      
    </div>
  );
}
