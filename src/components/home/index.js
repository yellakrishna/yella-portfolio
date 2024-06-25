import React from "react";
import "./add.css";

// import Items from '../items/Items'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../about";

const Home = () => {
  return (
    <>
    
      <div className="home-container">
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
        <img src="yella.png" alt="yella" className="yellaImg" />
        </div>
      </div>
      <button className="button btn btn-success">Say Hello!
      </button>
      <About/>
    </>
  );
};

export default Home;
