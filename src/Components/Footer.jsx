import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem"  }} />
            <div>
              <p>HD-35 Takshashila Parisar,Rajendra Nagar</p>
              <p>Indore,MP</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem",marginBottom:"-5px"}}
              />
              7970090953
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" ,marginBottom:"-5px" }}
              />
              yashrajsinghmandloi@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is me Yashraj Singh Mandloi .Passionate software developer with
            expertise in full-stack development. Skilled in multiple programming
            languages, problem-solving, and creating efficient solutions.
          </p>
          <div className="social">
            <NavLink to='https://www.instagram.com/yashraj_singh05/'>
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
              </NavLink> 
            <NavLink to='https://www.linkedin.com/in/yashraj-singh-mandloi-722b55158'>
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
              </NavLink>
            <NavLink to='https://github.com/Yashraj05'>
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
