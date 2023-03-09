import React from "react";
import room from "../assets/img/jpeg/room-1.jpeg";
import RoomSelection from "../components/selections/roomSelection";

const Rooms = () => (
  <div
    style={{
      backgroundImage: `url(${room})`,
      backgroundSize: "cover",
      height: "100vh",
    }}
  >
    <RoomSelection />
  </div>
);

export default Rooms;
