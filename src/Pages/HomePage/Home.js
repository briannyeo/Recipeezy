import React, { useState } from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Outlet />
    </div>
  );
};

export default Home;
