import React from "react";
import { render, screen } from "@testing-library/react";
import TopNavbar from "./TopNavbar";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
    </BrowserRouter>
  );
};
describe("Navbar", () => {
  it("should render all cars text in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/ALL CARS/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render profile in the Navbar", () => {
    render(<MockNavbar />);
    const ProfileElement = screen.getByText(/Profile/i);
    expect(ProfileElement).toBeInTheDocument();
  });
});
