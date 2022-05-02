import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Searchbar.scss";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [searchWord, setText] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(searchWord);
    navigate(`/cars?search-text=${searchWord}`);
  };

  return (
    <div className="search-bar">
      <h1 className="header">FIND YOUR DREAM CAR</h1>

      <Form className="textbox-div" onSubmit={handleSubmit}>
        <Container className="form-group-div">
          <Form.Control
            data-testid="searchTextBox"
            type="text"
            placeholder="Enter car name..."
            className="search-input"
            onChange={handleTextChange}
          />
          <button
            className="btn-search"
            type="submit"
            data-testid="search-btn"
            disabled={searchWord === ""}
          >
            SEARCH
          </button>
        </Container>
      </Form>
    </div>
  );
}

export default Searchbar;
