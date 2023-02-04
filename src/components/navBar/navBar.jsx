import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.svg";
const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Reach Resort" />
          </Link>
        </div>
        <ul style={{ display: "flex" }}>
          <li style={{ marginRight: "1rem" }}>
            <Link to="/">Главная</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <Link to="/rooms">Комнаты</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
