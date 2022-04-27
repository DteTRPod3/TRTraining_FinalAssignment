import React from "react";
import { render, screen } from "@testing-library/react";
import Careers from "../Careers";

describe("Contact Page tests", () => {
  it("renders the careers page", () => {
    render(<Careers />);
    const careerHeader = screen.getByRole('heading', {
        name: /careers/i
      })
    expect(careerHeader).toBeInTheDocument()
  });

  it("checks for the correct image",()=>{
      render(<Careers />)
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute("src","BMW.jpg")
  })

});
