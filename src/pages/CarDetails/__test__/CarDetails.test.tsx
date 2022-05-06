import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Router, MemoryRouter } from "react-router-dom";
import CarDetails from "../CarDetails";
import store from "../../../redux/configureStore";
import { act } from "react-dom/test-utils";
import Booking from "../../Booking/Booking";
import { createMemoryHistory } from "history";

const MockCarDetails = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CarDetails />
      </Provider>
    </BrowserRouter>
  );
};

describe("CarDetails", () => {
  it("should render Specifications in carDetails Page", () => {
    render(<MockCarDetails />);
    const textElement = screen.getByText(/Specifications/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render car name in carDetails Page", () => {
    render(<MockCarDetails />);
    const NameElement = screen.getByTestId("CarName");
    expect(NameElement).toBeInTheDocument();
  });

  it("should redirect user to Booking page on click of book now button", async () => {
    render(<MockCarDetails />);
    const BtnElement = screen.getByRole("button");
    expect(BtnElement).toBeInTheDocument();

    await fireEvent.click(BtnElement);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Booking />
          </BrowserRouter>
        </Provider>
      );
    });
    expect(screen.getByText(/Booking Details/i)).toBeInTheDocument();
  });
});
