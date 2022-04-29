import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Searchbar.scss";
import { Link } from "react-router-dom";

function Searchbar() {
  const [searchWord, setText] = useState("");
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className="search-bar">
      <h1>FIND YOUR DREAM CAR</h1>

      <Form className="textbox-div">
        <Container className="form-group-div">
          <Form.Control
            id="searchTextBox"
            type="text"
            placeholder="Enter car name..."
            onChange={handleTextChange}
          />
          <Link to="/cars" state={{ searchtext: searchWord }}>
            <button className="btn-search" type="submit">
              SEARCH
            </button>
          </Link>
        </Container>
      </Form>
    </div>
  );
}

export default Searchbar;
