/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import Login from "../Login";
import userEvent from "@testing-library/user-event";
import NotFound from "../../NotFound/NotFound";

const MockLoginPage = () => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );
};

describe("Login Page test cases", () => {
  it("should change the title of login page", async () => {
    render(<MockLoginPage />);
    await act(() => expect(document.title).toEqual("Xtreme Cars | Login Page"));
  });

  it("should render the header of the page", () => {
    render(<MockLoginPage />);
    const header = screen.getByRole("heading");
    expect(header).toContainHTML("Login To Xtreme Cars");
  });

  it("should render the input fields of email and password in the login form by default", () => {
    render(<MockLoginPage />);
    const inputPassword = screen.getByPlaceholderText(/Enter password/i);
    const inputEmail = screen.getByPlaceholderText(/Enter email/i);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("should render input fields of mobile and password in the login form on tab switch", async () => {
    render(<MockLoginPage />);
    const LoginWithMobileTab = screen.getByTestId("with-mobile");
    expect(LoginWithMobileTab).toBeInTheDocument();

    await fireEvent.click(LoginWithMobileTab);
    const inputMobile = screen.getByPlaceholderText(/Enter mobile number/i);
    const inputPassword = screen.getByPlaceholderText(/Enter password/i);

    expect(inputMobile).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("should have the valid value in email input field", () => {
    render(<MockLoginPage />);
    const emailFieldElement = screen.getByPlaceholderText(/Enter email/i);
    act(() => {
      userEvent.type(emailFieldElement, "kartik@example.com");
    });
    expect(emailFieldElement).toHaveValue("kartik@example.com");
  });

  it("should display the validation message if email is not entered", async () => {
    render(<MockLoginPage />);
    fireEvent.input(screen.getByPlaceholderText(/Enter password/i), {
      target: {
        value: "Kartik",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(await screen.findAllByTestId("email-error")).toHaveLength(1);
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  it("should display the validation message if password is not entered", async () => {
    render(<MockLoginPage />);
    fireEvent.input(screen.getByPlaceholderText(/Enter email/i), {
      target: {
        value: "kartik@example.com",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
    expect(await screen.findAllByTestId("password-error")).toHaveLength(1);
  });

  it("should display the validation message if mobile number is not entered", async () => {
    render(<MockLoginPage />);
    await fireEvent.click(screen.getByTestId("with-mobile"));
    fireEvent.input(screen.getByPlaceholderText(/Enter password/i), {
      target: {
        value: "Kartik",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Mobile number is required/i)
    ).toBeInTheDocument();
  });

  it("should display the validation message if invalid email is entered", async () => {
    render(<MockLoginPage />);
    fireEvent.input(screen.getByPlaceholderText(/Enter email/i), {
      target: {
        value: "kartik",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Invalid email address/i)
    ).toBeInTheDocument();
  });

  it("should display the validation message if mobile number is less than 10 digits", async () => {
    render(<MockLoginPage />);
    await fireEvent.click(screen.getByTestId("with-mobile"));
    fireEvent.input(screen.getByPlaceholderText(/Enter mobile number/i), {
      target: {
        value: "123457",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Mobile number cannot be less than 10 digits/i)
    ).toBeInTheDocument();
  });

  it("should display the validation message if mobile number is more than 10 digits", async () => {
    render(<MockLoginPage />);
    await fireEvent.click(screen.getByTestId("with-mobile"));
    fireEvent.input(screen.getByPlaceholderText(/Enter mobile number/i), {
      target: {
        value: "12345765772573",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Mobile number cannot be more than 10 digits/i)
    ).toBeInTheDocument();
  });

  it("should display the correct validation message if mobile number is is 10 digits but invalid(does not start with [6-9]", async () => {
    render(<MockLoginPage />);
    await fireEvent.click(screen.getByTestId("with-mobile"));
    fireEvent.input(screen.getByPlaceholderText(/Enter mobile number/i), {
      target: {
        value: "1234567892",
      },
    });
    fireEvent.submit(screen.getByTestId("submit-button"));
    expect(
      await screen.findByText(/Invalid Mobile number/i)
    ).toBeInTheDocument();
  });

  it("should redirect to signup page if the link is clicked", async () => {
    render(<MockLoginPage />);
    const linkElement = screen.getByText("New User? Register now");
    await fireEvent.click(linkElement);
    act(() => {
      /* The below code (NotFound) has to be changed to signup page once the branches with signup page is merged*/
      render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      );
    });
  });

  it("should reset all the fields and validation messages once Reset button is clicked", async () => {
    render(<MockLoginPage />);
    const resetButton = screen.getByTestId("reset-button");
    expect(resetButton).toBeInTheDocument();
    await fireEvent.click(resetButton);

    expect(screen.getByPlaceholderText(/Enter email/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Enter password/i)).toHaveValue("");
    expect(screen.queryByTestId(/email-error/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/password-error/i)).not.toBeInTheDocument();

    await fireEvent.click(screen.getByTestId(/with-mobile/i));
    expect(screen.getByPlaceholderText(/Enter mobile number/i)).toHaveValue(
      null
    );
    expect(screen.queryByTestId(/mobile-error/i)).not.toBeInTheDocument();
  });
});
