import React from "react";
import home from "../assets/img/jpeg/home.jpg";

const Home = () => (
  <div
    style={{
      backgroundImage: `url(${home})`,
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <h1 className="center">Добро пожаловать!</h1>
  </div>
);

export default Home;
