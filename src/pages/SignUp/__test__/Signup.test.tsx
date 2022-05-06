import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "../SignUp";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Sign Up Form", () => {
  it("checks for all the input fields present or not", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputName = screen.getByRole("textbox", {
      name: /name/i,
    });
    const inputContact = screen.getByRole("textbox", {
      name: /mobile number/i,
    });
    const inputAddress = screen.getByRole("textbox", {
      name: /address/i,
    });
    const inputPincode = screen.getByRole("spinbutton", {
      name: /pincode/i,
    });
    const inputEmail = screen.getByRole("textbox", {
      name: /email/i,
    });

    const inputPassword = screen.getByPlaceholderText(/enter password\.\.\./i);
    const inputConfirmPassword = screen.getByPlaceholderText(
      /re\-enter the password/i
    );

    expect(inputName).toBeInTheDocument();
    expect(inputContact).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
    expect(inputPincode).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputConfirmPassword).toBeInTheDocument();
  });

  it("checks for valid value in name input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputName = screen.getByRole("textbox", {
      name: /name/i,
    });
    act(() => {
      userEvent.type(inputName, "Manas");
    });

    expect(
      screen.getByRole("textbox", {
        name: /name/i,
      })
    ).toHaveValue("Manas");
  });

  it("checks for valid value in contact input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputContact = screen.getByRole("textbox", {
      name: /mobile number/i,
    });
    act(() => {
      userEvent.type(inputContact, "9876543219");
    });

    expect(
      screen.getByRole("textbox", {
        name: /mobile number/i,
      })
    ).toHaveValue("9876543219");
  });

  it("checks for valid value in address input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputAddress = screen.getByRole("textbox", {
      name: /address/i,
    });
    act(() => {
      userEvent.type(inputAddress, "India");
    });

    expect(
      screen.getByRole("textbox", {
        name: /address/i,
      })
    ).toHaveValue("India");
  });

  it("checks for valid value in pincode input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputPincode = screen.getByRole("spinbutton", {
      name: /pincode/i,
    });
    act(() => {
      userEvent.type(inputPincode, "123456");
    });

    expect(
      screen.getByRole("spinbutton", {
        name: /pincode/i,
      })
    ).toHaveValue(123456);
  });

  it("checks for valid value in email input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputEmail = screen.getByRole("textbox", {
      name: /email/i,
    });

    act(() => {
      userEvent.type(inputEmail, "manas@gmail.com");
    });

    expect(
      screen.getByRole("textbox", {
        name: /email/i,
      })
    ).toHaveValue("manas@gmail.com");
  });

  it("checks for valid value in password input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputPassword = screen.getByPlaceholderText(/enter password\.\.\./i);

    act(() => {
      userEvent.type(inputPassword, "Aasdasd12/@1");
    });

    expect(screen.getByPlaceholderText(/enter password\.\.\./i)).toHaveValue(
      "Aasdasd12/@1"
    );
  });

  it("checks for valid value in confirm password input field", () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
      </MemoryRouter>
    );

    const inputConfirmPassword = screen.getByPlaceholderText(
      /re\-enter the password/i
    );

    act(() => {
      userEvent.type(inputConfirmPassword, "Aasdasd12/@1");
    });

    expect(screen.getByPlaceholderText(/re\-enter the password/i)).toHaveValue(
      "Aasdasd12/@1"
    );
  });

  it("checks for error message when name is not added", async () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
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
        <SignUp></SignUp>
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

  it("checks for error message when pincode is not added", async () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
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

    expect(await screen.findAllByTestId("pincode-error")).toHaveLength(1);
  });

  it("checks for error message when email is not added", async () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
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

  it("checks for error message when password is not added", async () => {
    render(
      <MemoryRouter>
        <SignUp></SignUp>
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
