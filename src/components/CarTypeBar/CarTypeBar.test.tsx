import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarTypeBar from "./CarTypeBar";

describe("CarTypeBar", () => {
  const dispatchCarsByType = jest.fn();
  it("renders the component", () => {
    const title1 = "Sedan";
    const title2 = "SUV";
    const title3 = "Hatchback";
    render(<CarTypeBar />);
    const spanTextSedan = screen.getByText(title1, { exact: true });
    const spanTextSUV = screen.getByText(title2, { exact: true });
    const spanTextHatchback = screen.getByText(title3, { exact: true });
    expect(spanTextSedan).toBeInTheDocument();
    expect(spanTextSUV).toBeInTheDocument();
    expect(spanTextHatchback).toBeInTheDocument();
  });

  it("checks sedan gets clicked ", () => {
    render(
      <CarTypeBar carTypeIndex={0} dispatchCarsByType={dispatchCarsByType} />
    );
    const title1 = "Sedan";
    const spanTextSedan = screen.getByText(title1, { exact: true });
    userEvent.click(spanTextSedan);
    expect(dispatchCarsByType).toHaveBeenCalledWith(0);
  });

  it("checks SUV gets clicked ", () => {
    render(
      <CarTypeBar carTypeIndex={1} dispatchCarsByType={dispatchCarsByType} />
    );
    const title1 = "SUV";
    const spanTextSUV = screen.getByText(title1, { exact: true });
    userEvent.click(spanTextSUV);
    expect(dispatchCarsByType).toHaveBeenCalledWith(1);
  });

  it("checks hatchback gets clicked ", () => {
    render(
      <CarTypeBar carTypeIndex={2} dispatchCarsByType={dispatchCarsByType} />
    );
    const title1 = "Hatchback";
    const spanTextHatchback = screen.getByText(title1, { exact: true });
    userEvent.click(spanTextHatchback);
    expect(dispatchCarsByType).toHaveBeenCalledWith(2);
  });
});
