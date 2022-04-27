import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Mockapp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

xtest("renders learn react link", () => {
  render(<Mockapp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
