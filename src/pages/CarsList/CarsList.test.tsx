import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/configureStore";
import CarsList from "./CarsList";
jest.mock("../../components/CarCard/CarCard", () => () => (
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
describe("CarsList", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    (dispatch as any).mockImplementation(() => dispatch);
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
