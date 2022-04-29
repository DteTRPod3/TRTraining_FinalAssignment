import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";

const Mockapp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

test("renders logo link", () => {
  render(<Mockapp />);
  const linkElement = screen.getByText(/XTREME CARS/i);
  expect(linkElement).toBeInTheDocument();
});
