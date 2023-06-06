import "./SkillsStyles.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="experience">
      <h1 className="skills">Skills I Have</h1>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Advance</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Advance</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Advance</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>Reactjs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </div>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>Spring</h4>
              <small className="text-light">Basic</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon"></BsPatchCheckFill>
              <div>
              <h4>Hibernate</h4>
              <small className="text-light">Basic</small>
              </div>
            </div>
            <div className="experience_details">
              <BsPatchCheckFill className="icon" ></BsPatchCheckFill>
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </div>
          
        </div>
      
      </div>
      
      </div>
    </section>
  );
}
