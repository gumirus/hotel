import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
