import React from "react";
import sun from ".././assets/img/sun.png";
const Welcome = () => (
  <div
    style={{
      backgroundImage: `url(${sun})`,
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <h1>Добро пожаловать!</h1>
  </div>
);

export default Welcome;
