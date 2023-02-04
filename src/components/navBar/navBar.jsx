import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.svg";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Reach Resort" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/rooms">Комнаты</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
