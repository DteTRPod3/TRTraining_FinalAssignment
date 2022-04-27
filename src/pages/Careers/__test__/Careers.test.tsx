import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Careers from "../Careers";

window.scrollTo = jest.fn();
describe("Contact Page tests", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("renders the careers page", () => {
    render(
      <MemoryRouter>
        <Careers />
      </MemoryRouter>
    );
    const careerHeader = screen.getByRole("heading", {
      name: /careers/i,
    });
    expect(careerHeader).toBeInTheDocument();
  });

  it("checks for the correct image", () => {
    render(
      <MemoryRouter>
        <Careers />
      </MemoryRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "BMW.jpg");
  });
});
