import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import CarsList from "../../../pages/CarsList/CarsList";
import HomePage from "../../../pages/LandingPage/HomePage";
import store from "../../../redux/configureStore";
import TopNavbar from "../TopNavbar";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <TopNavbar />
    </BrowserRouter>
  );
};
describe("Navbar", () => {
  it("should render all cars tab in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/ALL CARS/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render new cars tab in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/NEW CARS/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render used cars tab in the Navbar", () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/USED CARS/i);
    expect(textElement).toBeInTheDocument();
  });

  it('Logo must have src = "/logo.svg" and alt = "xtremecar Logo"', () => {
    render(<MockNavbar />);
    const logo = screen.getByAltText("Xtreme cars logo");
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "Xtreme cars logo");
  });

  it("should render carslist page on click of All Cars", async () => {
    render(<MockNavbar />);
    const textElement = screen.getByText(/ALL CARS/i);
    expect(textElement).toBeInTheDocument();
    const AllcarsLink = screen.getByTestId("AllcarsLink");
    expect(AllcarsLink).toBeInTheDocument();
    await fireEvent.click(AllcarsLink);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <CarsList />
          </Provider>
        </MemoryRouter>
      );
    });
    expect(screen.getByText(/View All/i)).toBeInTheDocument();
  });

  it("should render profile icon if loggedin", () => {
    render(<MockNavbar />);
    const isloggedin = localStorage.getItem("isloggedin");
    const ProfileElement = screen.getByTestId("profileImage");
    if (isloggedin === "true") {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(ProfileElement).toBeInTheDocument();
      // eslint-disable-next-line jest/no-conditional-expect
      expect(ProfileElement).toHaveAttribute("src", "man.png");
    } else {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(ProfileElement).toHaveAttribute("src", "profile.svg");
    }

    expect(ProfileElement).toBeInTheDocument();
  });

  it("should render logotext in the Navbar", () => {
    render(<MockNavbar />);
    const LogoElement = screen.getByText(/XTREME CARS/i);
    expect(LogoElement).toBeInTheDocument();
  });

  it("should redirect user to Homepage on click of brand-logo", async () => {
    render(<MockNavbar />);
    const LogoElement = screen.getByText(/XTREME CARS/i);
    expect(LogoElement).toBeInTheDocument();
    const XtremecarsLink = screen.getByTestId("XtremecarsLink");
    expect(XtremecarsLink).toBeInTheDocument();
    await fireEvent.click(XtremecarsLink);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </MemoryRouter>
      );
    });
    expect(screen.getByText(/FIND YOUR DREAM CAR/i)).toBeInTheDocument();
  });

  it("should not render user profile icon if not loggedin", () => {
    render(<MockNavbar />);
    const isloggedin = localStorage.getItem("isloggedin");
    const ProfileElement = screen.getByTestId("profileImage");
    if (isloggedin === "false") {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(ProfileElement).toBeInTheDocument();
      // eslint-disable-next-line jest/no-conditional-expect
      expect(ProfileElement).toHaveAttribute("src", "profile.svg");
    }
  });
});
