import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import "./index.css";
const Skills = () => {
  return (
    <>
      <h1 className="text-center mt-4 skill">Skills</h1>
      <div className="skillContainer">
        <div className="frontend">
          <h4>Frontend Developer</h4>
          <div className="boxContainer">
         <div className="miniBox">
          <p>
            <FaHtml5 /> HTML
          </p>
          </div>

          <div className="miniBox">
          <p>
          <DiCss3 /> CSS
          </p>
          </div>

          <div className="miniBox">
          <p>
          <BiLogoJavascript /> Javascript
          </p>
          </div>
          
          <div className="miniBox">
          <p>
          <RiReactjsFill /> Reactjs
          </p>
          </div>
          
        </div>

        </div>

        <div className="frontend">
          <h4>Backend Developer</h4>
          <div className="boxContainer">

          <div className="miniBoxs">
          <p>
          <RiNodejsLine /> Nodejs
          </p>
          </div>

          <div className="miniBoxs">
          <p>
          <SiExpress /> Expressjs
          </p>
          </div>

          <div className="miniBoxs">
          <p>
          <GrMysql /> Sql
          </p>
          </div>

          <div className="miniBoxs">
          <p>
          <SiMongodb /> Mongodb
          </p>
          </div>
        
        </div>
      </div>
      </div>
    </>
  );
};

export default Skills;
