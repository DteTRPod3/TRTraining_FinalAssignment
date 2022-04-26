import React from "react";
import { render, screen } from "@testing-library/react";
import CarCard from "./CarCard";
import { BrowserRouter } from "react-router-dom";

const MockCard = () => {
  return (
    <BrowserRouter>
      <CarCard />
    </BrowserRouter>
  );
};
describe("CarCard", () => {
  it("should render details of card in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("cardetail");
    expect(textElement).toBeInTheDocument();
  });
});
