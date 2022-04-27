import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TopNavbar from "../TopNavbar";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import CarsList from "../../../pages/CarsList/CarsList";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
    </BrowserRouter>
  );
};
describe("Navbar", () => {
  it("should render all cars text in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/ALL CARS/i);
    expect(textElement).toBeInTheDocument();

  });
  
  
  it("should render all cars text in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/ALL CARS/i);
    expect(textElement).toBeInTheDocument();

    const AllcarsLink = screen.getByTestId("AllcarsLink");
    expect(AllcarsLink).toBeInTheDocument();
    await fireEvent.click(AllcarsLink);
    
    act(() => {
      render(
        
        <MemoryRouter>
 <CarsList/>
        </MemoryRouter>
          
          
       
      );
    });
    expect(screen.getByText(/View All/i)).toBeInTheDocument();
  });

  });






  it("should render profile in the Navbar", () => {
    render(<MockNavbar />);
    const ProfileElement = screen.getByText(/Profile/i);
    expect(ProfileElement).toBeInTheDocument();
  });

  it("should render logotext in the Navbar", () => {
    render(<MockNavbar />);
    const LogoElement = screen.getByText(/XTREME CARS/i);
    expect(LogoElement).toBeInTheDocument();
  });

  it('Logo must have src = "/logo.svg" and alt = "xtremecar Logo"', () => {
    render(<MockNavbar />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "xtreme car logo");
  });

  it("should redirect to All cars on click of All cars ", () => {
    render(<MockNavbar />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "xtreme car logo");
  });

  



});
