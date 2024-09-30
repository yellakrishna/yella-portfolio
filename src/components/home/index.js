import React from "react";
import "./add.css";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

// import Items from '../items/Items'

import "bootstrap/dist/css/bootstrap.min.css";
import About from "../about";
import Contact from "../contact";

const Home = () => {
  return (
    <>
      <div className="home-container ">
        <div className="icons">
          <a
            className="text-center black "
            href="https://github.com/yellakrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a
            className="black m-4"
            href="https://www.linkedin.com/in/yella-krishna-t-950a9924b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a className="black"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="heading">
          <h1 className="">Yella krishna</h1>
          <h5>______Web developer</h5>
          <p>
            A Web Developer from Delhi. I build dynamic,
            <br /> intuitive websites with a focus on creativity.
            <br /> Explore my projects to see my work!
          </p>
        </div>
        <div>
          <img src="yellakrishna.jpg" alt="yella" className="yellaImg" />
        </div>
      </div>
      <button className="button btn btn-success mb-2">Say Hello!</button>

      <About />
      <Contact />
    </>
  );
};

export default Home;
