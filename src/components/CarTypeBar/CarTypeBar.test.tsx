import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarTypeBar from "./CarTypeBar";

const MockCarTypeBar = () => {
  return (
    <BrowserRouter>
      <CarTypeBar />
    </BrowserRouter>
  );
};

describe("CarTypeBar", () => {
  it("renders the component", () => {
    const title = "Sedan";
    render(<MockCarTypeBar />);
    const spanTextSedan = screen.getByText(title, { exact: true });
    expect(spanTextSedan).toBeInTheDocument();
  });

  it("renders the component", () => {
    const title = "SUV";
    render(<MockCarTypeBar />);
    const spanTextSUV = screen.getByText(title, { exact: true });
    expect(spanTextSUV).toBeInTheDocument();
  });

  it("renders the component", () => {
    const title = "Hatchback";
    render(<MockCarTypeBar />);
    const spanTextHatchback = screen.getByText(title, { exact: true });
    expect(spanTextHatchback).toBeInTheDocument();
  });
});
