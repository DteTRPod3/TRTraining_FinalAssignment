import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import CarDetails from "../../../pages/CarDetails/CarDetails";
import store from "../../../redux/configureStore";
import CarCard from "../CarCard";

const MockCard = () => {
  const cardetail = {
    id: "hondacity",
    name: "Honda City",
    image: "carimg.svg",
    price: "12.4L",
  };
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CarCard car={cardetail} />
      </Provider>
    </BrowserRouter>
  );
};
describe("CarCard", () => {
  it("should render name of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("cardetail");
    expect(textElement).toContainHTML("Honda City");
  });

  it("should render price of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("cardprice");
    expect(textElement).toContainHTML("12.4L");
  });

  it("should render image of car in the CarCard", () => {
    render(<MockCard />);
    const textElement = screen.getByTestId("carimg");
    expect(textElement).toHaveAttribute("src", "carimg.svg");
  });

  it("should render the View Details Page on card click", async () => {
    render(<MockCard />);
    const cardClickableLink = screen.getByTestId("card");
    expect(cardClickableLink).toBeInTheDocument();
    await fireEvent.click(cardClickableLink);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <CarDetails />
          </MemoryRouter>
        </Provider>
      );
    });
    expect(screen.getByText(/Car Specifications/i)).toBeInTheDocument();
  });
});
