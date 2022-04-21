import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Searchbar.scss";
import { Link } from "react-router-dom";

function Searchbar() {
  const [searchWord, setText] = useState("");
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className="searchbar">
      <h2>FIND YOUR DREAM CAR</h2>
      <div className="textbox-div">
        <Form.Control
          id="searchTextBox"
          type="text"
          placeholder="Enter car name"
          onChange={handleTextChange}
        />
        <Link to="/cars" state={{ searchtext: searchWord }}>
          <Button type="submit" variant="warning">
            Search
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Searchbar;
