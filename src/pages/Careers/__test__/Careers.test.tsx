import React from "react";
import { render, screen } from "@testing-library/react";
import Careers from "../Careers";
import { MemoryRouter } from "react-router-dom";

describe("Contact Page tests", () => {
  it("renders the careers page", () => {
    render(
      <MemoryRouter>
        <Careers />
      </MemoryRouter>
    );
    const careerHeader = screen.getByRole('heading', {
        name: /careers/i
      })
    expect(careerHeader).toBeInTheDocument()
  });

  it("checks for the correct image",()=>{
    render(
      <MemoryRouter>
        <Careers />
      </MemoryRouter>
    );
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute("src","BMW.jpg")
  })

});
