import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TopNavbar from "../TopNavbar";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import CarsList from "../../../pages/CarsList/CarsList";
import { act } from "react-dom/test-utils";
import store from "../../../redux/configureStore";
import { Provider } from "react-redux";

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

  it('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<MockNavbar />);
    const logo = screen.getByRole("img");
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
});
