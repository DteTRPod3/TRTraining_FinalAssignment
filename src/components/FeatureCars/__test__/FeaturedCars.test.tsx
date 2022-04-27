import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedCars from "../FeaturedCars";

test("renders learn react link", () => {
  render(<FeaturedCars carTypeIndex={0} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
