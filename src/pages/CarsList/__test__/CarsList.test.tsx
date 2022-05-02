import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import CarsList from "../../../pages/CarsList/CarsList";

const MockCarsListFromSearchbar = () => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/cars?search-text=Maruti"]}>
        <CarsList />
      </MemoryRouter>
    </Provider>
  );
};

describe("Cars List test cases", () => {
  it("Check if All the buttons should be inactive if navigated with searchtext", () => {
    render(<MockCarsListFromSearchbar />);
    const btnGroup = screen.getAllByRole("button");
    btnGroup.forEach((element) => {
      expect(element).not.toHaveClass("active-tab");
    });
  });

  it("Check the count of cards rendered on filtered result", () => {
    render(<MockCarsListFromSearchbar />);
    const resultcount = screen.getByTestId("resultcount");
    expect(resultcount).toBeInTheDocument();
  });
});
