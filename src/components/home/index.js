import React from "react";
import "./add.css";

// import Items from '../items/Items'

import "bootstrap/dist/css/bootstrap.min.css";
import About from "../about";
import Contact from "../contact";


const Home = () => {
  return (
    <>
    
      <div className="home-container ">
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
      <button className="button btn btn-success mb-2">Say Hello!
      </button>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
