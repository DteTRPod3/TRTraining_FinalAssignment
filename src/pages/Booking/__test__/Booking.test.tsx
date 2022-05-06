import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Booking from "../Booking";
import { MemoryRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import * as ReactRouter from "react-router";

xdescribe("Booking  Form", () => {
  xit("checks for all the input fields present or not", () => {
    render(
      <MemoryRouter>
        <Booking></Booking>
      </MemoryRouter>
    );

    const inputName = screen.getByPlaceholderText(/enter name\.\.\./i);
    const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i);

    expect(inputName).toBeInTheDocument();
    expect(inputContact).toBeInTheDocument();
  });

  xit("checks for valid value in name input field", () => {
    render(
      <MemoryRouter>
        <Booking></Booking>
      </MemoryRouter>
    );

    const inputName = screen.getByPlaceholderText(/enter name\.\.\./i);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(inputName, "Nobita");
    });

    expect(screen.getByPlaceholderText(/enter name\.\.\./i)).toHaveValue(
      "Nobita"
    );
  });
  xit("checks for valid value in contact input field", () => {
    render(
      <MemoryRouter>
        <Booking></Booking>
      </MemoryRouter>
    );

    const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(inputContact, "9876543219");
    });

    expect(screen.getByPlaceholderText(/enter contact\.\.\./i)).toHaveValue(
      "9876543219"
    );
  });
});
