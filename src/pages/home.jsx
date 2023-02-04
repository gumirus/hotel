import React from "react";
import home from "../assets/img/jpeg/home.jpg";
import Banner from "../components/banner/banner";

const Home = () => (
  <div
    style={{
      backgroundImage: `url(${home})`,
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Banner title="Welcome!" />
  </div>
);

export default Home;
