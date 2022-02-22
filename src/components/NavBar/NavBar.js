import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import chefHat from "../../images/chef.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <Link to="/">
          <img src={chefHat} alt="chefhat" />
          Recipeezy
        </Link>
      </div>
      <div className="nav-items">
        <span className="nav-item">
          <Link to="/about">About</Link>
        </span>
        <span className="nav-item">
          <Link to="/plannedmeals">Planned Meals</Link>
        </span>
        <span className="nav-item">
          <Link to="/grocerylist">Grocery List</Link>
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
