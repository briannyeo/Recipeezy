import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../images/searchicon.png";
import { useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBarBS = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/Recipeezy/results?search=${searchWord}`);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div style={{ width: "35%", margin: "0 auto" }}>
      <Form className="d-flex">
        <FormControl
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          type="search"
          placeholder="Search Ingredient"
          className="me-2"
          aria-label="Search"
          onKeyDown={handleKeypress}
        />
        <Button className="searchbutton" onClick={handleSubmit}>
          <img className="searchiconimg" src={searchIcon} alt="search" />
        </Button>
      </Form>
    </div>
  );
};

export default SearchBarBS;
