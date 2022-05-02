import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import CarsList from "../../../pages/CarsList/CarsList";
import userEvent from "@testing-library/user-event";

jest.mock("../../../components/CarCard/CarCard", () => () => (
  <div>Mock Course Item</div>
));
const MockCarsList = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CarsList />
      </BrowserRouter>
    </Provider>
  );
};

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

  const dispatch = jest.fn();
  beforeEach(() => {
    (dispatch as any).mockImplementation(() => dispatch);
  });

  it("Check if All the buttons should be inactive if navigated with searchtext", () => {
    render(<MockCarsListFromSearchbar />);
    const btnGroup = screen.getAllByRole("button");
    btnGroup.forEach((element: JSX.Element) => {
      expect(element).not.toHaveClass("active-tab");
    });
  });

  it("Check the count of cards rendered on filtered result", () => {
    render(<MockCarsListFromSearchbar />);
    const resultcount = screen.getByTestId("resultcount");
    expect(resultcount).toBeInTheDocument();
  });

  it("renders the component", () => {
    render(<MockCarsList />);
    const switchText = screen.getByText("View All");
    expect(switchText).toBeInTheDocument();
  });

  it("view all tab to have been clicked", () => {
    const { container } = render(<MockCarsList />);
    let viewAll = screen.getByRole("button", {
      name: /view all/i,
    });
    userEvent.click(viewAll);
    expect(container.getElementsByClassName("active-tab")[0].textContent).toBe(
      "View All"
    );
  });

  it("sedan tab to have been clicked", () => {
    const { container } = render(<MockCarsList />);
    let sedan = screen.getByRole("button", {
      name: /sedan/i,
    });
    userEvent.click(sedan);
    expect(container.getElementsByClassName("active-tab")[0].textContent).toBe(
      "Sedan"
    );
  });

  it("hatchback tab to have been clicked", () => {
    const { container } = render(<MockCarsList />);
    let hatchback = screen.getByRole("button", {
      name: /hatchback/i,
    });
    userEvent.click(hatchback);
    expect(container.getElementsByClassName("active-tab")[0].textContent).toBe(
      "Hatchback"
    );
  });

  it("suv tab to have been clicked", () => {
    const { container } = render(<MockCarsList />);
    let suv = screen.getByRole("button", {
      name: /suv/i,
    });
    userEvent.click(suv);
    expect(container.getElementsByClassName("active-tab")[0].textContent).toBe(
      "SUV"
    );
  });
  
});
