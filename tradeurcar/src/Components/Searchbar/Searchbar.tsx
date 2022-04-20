import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Searchbar.scss";

function Searchbar() {
  return (
    <div className="searchbar">
      <h2>FIND YOUR DREAM CAR</h2>
      <div className="textbox-div">
        <Form.Control type="text" placeholder="Enter car name" />
        <Button variant="warning">Search</Button>
      </div>
    </div>
  );
}

export default Searchbar;
