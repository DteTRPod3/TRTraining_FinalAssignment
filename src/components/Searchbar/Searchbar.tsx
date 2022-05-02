import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Searchbar.scss";
import { Link } from "react-router-dom";

function Searchbar() {
  const [searchWord, setText] = useState("");
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className="search-bar">
      <h1 className="header">FIND YOUR DREAM CAR</h1>

      <Form className="textbox-div">
        <Container className="form-group-div">
          <Form.Control
            data-testid="searchTextBox"
            type="text"
            placeholder="Enter car name..."
            className="search-input"
            onChange={handleTextChange}
          />
          <Link to={`/cars?search-text=${searchWord}`}>
            <button
              className="btn-search"
              type="submit"
              data-testid="search-btn"
            >
              SEARCH
            </button>
          </Link>
        </Container>
      </Form>
    </div>
  );
}

export default Searchbar;
