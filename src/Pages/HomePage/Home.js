import React, { useState } from "react";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [searchData, setSearchData] = useState();

  return (
    <div>
      <SearchBar setSearchData={setSearchData} />
      <img src={searchData} />
    </div>
  );
};

export default Home;
