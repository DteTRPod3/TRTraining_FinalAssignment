import React from "react";
import { render, screen } from "@testing-library/react";
import TestDrive from "../TestDrive";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Test Drive Form", () => {
  it("checks for all the input fields present or not", () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    const inputName = screen.getByPlaceholderText(/enter name\.\.\./i);
    const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i);
    const inputAddress = screen.getByPlaceholderText(/enter address\.\.\./i);
    const inputEmail = screen.getByPlaceholderText(/enter email\.\.\./i);

    expect(inputName).toBeInTheDocument();
    expect(inputContact).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
  });
  it("checks for valid value in name input field", () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    const inputName = screen.getByPlaceholderText(/enter name\.\.\./i);
    act(() => {
      userEvent.type(inputName, "Manas");
    });

    expect(screen.getByPlaceholderText(/enter name\.\.\./i)).toHaveValue(
      "Manas"
    );
  });
  it("checks for valid value in contact input field", () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i);
    act(() => {
      userEvent.type(inputContact, "1111111111");
    });

    expect(screen.getByPlaceholderText(/enter contact\.\.\./i)).toHaveValue(
      "1111111111"
    );
  });
  it("checks for valid value in address input field", () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    const inputAddress = screen.getByPlaceholderText(/enter address\.\.\./i);
    act(() => {
      userEvent.type(inputAddress, "India");
    });

    expect(screen.getByPlaceholderText(/enter address\.\.\./i)).toHaveValue(
      "India"
    );
  });
  it("checks for valid value in email input field", () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    const inputEmail = screen.getByPlaceholderText(/enter email\.\.\./i);

    act(() => {
      userEvent.type(inputEmail, "manas@gmail.com");
    });

    expect(screen.getByPlaceholderText(/enter email\.\.\./i)).toHaveValue(
      "manas@gmail.com"
    );
  });

  it("checks for submit button event", () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );
    const inputName = screen.getByPlaceholderText(/enter name\.\.\./i);
    const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i);
    const inputAddress = screen.getByPlaceholderText(/enter address\.\.\./i);
    const inputEmail = screen.getByPlaceholderText(/enter email\.\.\./i);

    act(() => {
      userEvent.type(inputName, "Manas");
      userEvent.type(inputContact, "1111111111");
      userEvent.type(inputAddress, "India");
      userEvent.type(inputEmail, "manas@gmail.com");
    });

    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });

    act(() => {
      submitButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
});
});
