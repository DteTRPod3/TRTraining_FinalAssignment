import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedCars from "../FeaturedCars";

test("renders features component ", () => {
  render(<FeaturedCars carTypeIndex={0} />);
  const linkElement = screen.getByText(/View All/i);
  expect(linkElement).toBeInTheDocument();
});
