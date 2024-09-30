import React from "react";
import "./add.css";


const data = [
  {
    id: 1,
    imgUrl: "./images/onlineFish.png",
    href: "https://online-fish-market-alampur.netlify.app/",
    name: "HTML , CSS , Javascript , React",
    head: "Fishing-Marketing",
  },
  {
    id: 2,
    imgUrl: "./images/portfolio.png",
    href: "https://portfolio-yella.netlify.app/",
    name: "HTML , CSS , Javascript , React",
    head: "Portfolio",
  },
  {
    id: 3,
    imgUrl: "./images/input.png",
    href: "https://user-input-search.netlify.app/",
    name: "HTML , CSS , Javascript , React",
    head: "InputSeacher",
  },
  {
    id: 4,
    imgUrl: "./images/calculator.png",
    href: "https://calculator-react123.netlify.app/",
    name: "HTML , CSS , Javascript ",
    head: "Calculator",
  },
  {
    id: 5,
    imgUrl: "./images/todolist.png",
    href: "https://yella-todolist.netlify.app/",
    name: "HTML , CSS , Javascript ",
    head: "Todolist",
  },
];

const Projects = () => {
  return (
    <div>
      <h1>projects</h1>
      <ul>
        {data.map((eachItem) => {
          const { id, imgUrl, head, name, href } = eachItem;
          return (
            <li key={id}>
              <div>
                <h5>{head}</h5>
                <div>
                  <a href={href}>
                    <img
                      src={imgUrl}
                      alt="fish"
                      style={{ height: 120, width: 350 }}
                    />
                  </a>
                </div>

                <p>{name}</p>
                <a href={href}><button className="btn btn-info">Demo</button></a>

                
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
