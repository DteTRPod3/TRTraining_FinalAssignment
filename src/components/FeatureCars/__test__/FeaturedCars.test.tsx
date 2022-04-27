import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedCars from "../FeaturedCars";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import { BrowserRouter } from "react-router-dom";

const MockCard = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FeaturedCars carTypeIndex={0} />
      </Provider>
    </BrowserRouter>
  );
};

describe("featuredcars component testing", () => {
  it("should renders features viewall text", () => {
    render(<MockCard />);
    const linkElement = screen.getByText(/View All/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render featured-car text", () => {
    render(<MockCard />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toContainHTML("Featured Cars");
  });

  it("should render 3 or less car cards inside feature section", () => {
    render(<MockCard />);
    const carlistElement = screen.getByTestId("carlist").childElementCount;
    expect(carlistElement).toBeLessThan(3);
  });

  it("should render next arrow and prev arrow", () => {
    render(<MockCard />);

    const prevElement = screen.getByTestId("prev");
    expect(prevElement).toBeInTheDocument();
    const nextElement = screen.getByTestId("next");
    expect(nextElement).toBeInTheDocument();
  });
});
