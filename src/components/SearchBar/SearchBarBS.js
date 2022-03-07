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
      handleSubmit();
    }
  };

  return (
    <Form className="d-flex">
      <FormControl
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onKeyDown={handleKeypress}
      />
      <Button onClick={handleSubmit} variant="outline-success">
        <img className="searchiconimg" src={searchIcon} alt="search" />
      </Button>
    </Form>
  );
};

export default SearchBarBS;
