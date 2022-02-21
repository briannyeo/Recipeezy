import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src="/images/chef.png" alt="chef-hat" />
        <Link to="/">Recipeezy</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
        <Link to="/plannedmeals">Planned Meals</Link>
        <Link to="/grocerylist">Grocery List</Link>
      </div>
    </div>
  );
};

export default Header;
