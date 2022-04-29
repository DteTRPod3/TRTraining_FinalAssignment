import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import Searchbar from "../Searchbar";
import CarsList from "../../../pages/CarsList/CarsList";

describe("CarCard", () => {
  it("should render the Car listing Page on search button click", async () => {
    render(
      <MemoryRouter>
        <Searchbar />
      </MemoryRouter>
    );
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
