import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
      userEvent.type(inputContact, "9876543219");
    });

    expect(screen.getByPlaceholderText(/enter contact\.\.\./i)).toHaveValue(
      "9876543219"
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

  it("checks for error message when name is not added", async () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );
    fireEvent.input(screen.getByRole("textbox", { name: /mobile number/i }), {
      target: {
        value: 9876543212,
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "Manas@Manas.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /address/i }), {
      target: {
        value: "address",
      },
    });

    fireEvent.submit(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    expect(await screen.findAllByTestId("name-error")).toHaveLength(1);
  });

  it("checks for error message when contact is not added", async () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: {
        value: "Manas",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "Manas@Manas.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /address/i }), {
      target: {
        value: "address",
      },
    });

    fireEvent.submit(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    expect(await screen.findAllByTestId("contact-error")).toHaveLength(1);
  });
  it("checks for error message when address is not added", async () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );

    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: {
        value: "Manas",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "Manas@Manas.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /mobile number/i }), {
      target: {
        value: 9878787654,
      },
    });

    fireEvent.submit(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    expect(await screen.findAllByTestId("address-error")).toHaveLength(1);
  });
  it("checks for error message when email is not added", async () => {
    render(
      <MemoryRouter>
        <TestDrive></TestDrive>
      </MemoryRouter>
    );
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: {
        value: "Manas",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /mobile number/i }), {
      target: {
        value: 9345678998,
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /address/i }), {
      target: {
        value: "address",
      },
    });

    fireEvent.submit(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    expect(await screen.findAllByTestId("email-error")).toHaveLength(1);
  });
});
