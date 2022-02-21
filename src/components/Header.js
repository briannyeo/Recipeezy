import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src="../src/images/chef.png" alt="chef-hat" />
        <Link to="/">Recipeezy</Link>
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
