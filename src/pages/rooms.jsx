import React from "react";
import room from "../assets/img/jpeg/room-1.jpeg";

const Rooms = () => (
  <div
    style={{
      backgroundImage: `url(${room})`,
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <h1>Комната</h1>
  </div>
);

export default Rooms;
