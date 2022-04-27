import React from "react";
import { render, screen } from "@testing-library/react";
import CarCard from "../CarCard";
import { BrowserRouter } from "react-router-dom";

const MockCard = () => {
  const cardetail = {
    id: "hondacity",
    name: "Honda City",
    image: "carimg.svg",
    price: "12.4L",
  };
  return (
    <BrowserRouter>
      <CarCard car={cardetail} />
    </BrowserRouter>
  );
};
describe("CarCard", () => {
  it("should render name of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("cardetail");
    expect(textElement).toContainHTML("Honda City");
  });

  it("should render price of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("cardprice");
    expect(textElement).toContainHTML("12.4L");
  });

  it("should render image of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("carimg");
    expect(textElement).toHaveAttribute("src", "carimg.svg");
  });
});
