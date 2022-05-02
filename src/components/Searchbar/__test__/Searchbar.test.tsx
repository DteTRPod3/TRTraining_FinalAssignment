import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import Searchbar from "../Searchbar";
import CarsList from "../../../pages/CarsList/CarsList";
import userEvent from "@testing-library/user-event";

const MockSearchbar = () => {
  return (
    <MemoryRouter>
      <Searchbar />
    </MemoryRouter>
  );
};

describe("Searchbar test cases", () => {
  it("should render the heading tag of the searchbar component", () => {
    render(<MockSearchbar />);
    const headertag = screen.getByRole("heading");
    expect(headertag).toBeInTheDocument();
    expect(headertag).toContainHTML("FIND YOUR DREAM CAR");
  });

  it("should render the input field in the searchbar form", () => {
    render(<MockSearchbar />);
    const searchInput = screen.getByTestId("searchTextBox");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
  });

  it("should render the correct placeholder of input field in the searchbar form", () => {
    render(<MockSearchbar />);
    const searchInput = screen.getByPlaceholderText("Enter car name...");
    expect(searchInput).toBeInTheDocument();
  });

  it("should link the input field value to searchword", () => {
    render(<MockSearchbar />);
    const searchInput = screen.getByPlaceholderText("Enter car name...");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(searchInput, "Honda");
    });
    expect(searchInput).toHaveValue("Honda");
  });

  it("should render the Car listing Page on search button click", async () => {
    render(<MockSearchbar />);
    const searchbutton = screen.getByTestId("search-btn");
    expect(searchbutton).toBeInTheDocument();
    await fireEvent.click(searchbutton);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <CarsList />
          </MemoryRouter>
        </Provider>
      );
    });
    expect(screen.getByText(/View All/i)).toBeInTheDocument();
  });
});
