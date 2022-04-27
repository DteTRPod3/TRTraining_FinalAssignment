import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedCars from "../FeaturedCars";

<<<<<<< HEAD
test("renders features component ", () => {
  render(<FeaturedCars carTypeIndex={0} />);
  const linkElement = screen.getByText(/View All/i);
=======
test("renders learn react link", () => {
  render(<FeaturedCars carTypeIndex={0} />);
  const linkElement = screen.getByText(/learn react/i);
>>>>>>> b9544c763a6fc41dee3aec786003f370153608f5
  expect(linkElement).toBeInTheDocument();
});
