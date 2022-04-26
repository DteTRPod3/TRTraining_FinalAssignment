import React from "react";
import { render, screen } from "@testing-library/react";
import TopNavbar from "../TopNavbar";

it("should render nav links on top navigation bar", () => {
  render(<TopNavbar />);
  const linkElement = screen.getByText(/New Cars/i);
  expect(linkElement).toBeInTheDocument();
});
