import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { MemoryRouter } from "react-router-dom";

describe("Contact Page tests", () => {
  it("renders the contact page", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    const contactHeader = screen.getByRole("heading", {
      name: /contact us/i,
    });
    expect(contactHeader).toBeInTheDocument();
  });

  it("checks for the correct image", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "BMW.jpg");
  });
});
