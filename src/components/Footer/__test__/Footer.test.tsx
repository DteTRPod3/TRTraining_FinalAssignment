import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import Careers from "../../../pages/Careers/Careers";
import Contact from "../../../pages/Contact/Contact";
import TestDrive from "../../../pages/TestDrive/TestDrive";
import Footer from "../Footer";
window.scrollTo = jest.fn();

describe("Footer Link Redirection", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("checks if the contact link exists", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });

  it("renders to Contact Page", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
    await fireEvent.click(contactLink);

    act(() => {
      render(
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(/call us/i)).toBeInTheDocument();
  });

  it("checks if the career link exists", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const careerLink = screen.getByText(/career/i);
    expect(careerLink).toBeInTheDocument();
  });

  it("renders to Career Page", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const careerLink = screen.getByText(/contact us/i);
    expect(careerLink).toBeInTheDocument();
    await fireEvent.click(careerLink);

    act(() => {
      render(
        <MemoryRouter>
          <Careers />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(/job openings for you/i)).toBeInTheDocument();
  });

  it("checks if the test drive link exists", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const testDriveLink = screen.getByText(/request a test drive/i);
    expect(testDriveLink).toBeInTheDocument();
  });

  it("renders to Test Drive Page", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const testDriveLink = screen.getByText(/request a test drive/i);
    expect(testDriveLink).toBeInTheDocument();
    await fireEvent.click(testDriveLink);

    act(() => {
      render(
        <MemoryRouter>
          <TestDrive />
        </MemoryRouter>
      );
    });

    expect(screen.getByText(/test drive form/i)).toBeInTheDocument();
  });
});
