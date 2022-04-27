import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact Page tests", () => {
  it("renders the contact page", () => {
    render(<Contact />);
    const contactHeader = screen.getByRole("heading", {
      name: /contact us/i,
    });
    expect(contactHeader).toBeInTheDocument()
  });

  it("checks for the correct image",()=>{
      render(<Contact />)
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute("src","BMW.jpg")
  })

});
