import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Footer from "../Footer";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Contact from "../../../pages/Contact/Contact";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import Careers from "../../../pages/Careers/Careers";
import TestDrive from "../../../pages/TestDrive/TestDrive";

describe("Footer Link Redirection", () => {
  it("checks if the contact link exists", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });

  it("renders to Contact Page", async () =>  {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
    await fireEvent.click(contactLink)

    act(()=>{
        render(
          <MemoryRouter>
            <Contact/>
          </MemoryRouter>
        )
    })
    
    expect(screen.getByText(/call us/i)).toBeInTheDocument()
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

  it("renders to Career Page", async () =>  {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const careerLink = screen.getByText(/contact us/i);
    expect(careerLink).toBeInTheDocument();
    await fireEvent.click(careerLink)

    act(()=>{
        render(
          <MemoryRouter>
            <Careers></Careers>
          </MemoryRouter>
        )
    })
    
    expect(screen.getByText(/job openings for you/i)).toBeInTheDocument()
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

  it("renders to Test Drive Page", async () =>  {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const testDriveLink = screen.getByText(/request a test drive/i);
    expect(testDriveLink).toBeInTheDocument();
    await fireEvent.click(testDriveLink)

    act(()=>{
        render(
        <MemoryRouter>
          <TestDrive></TestDrive>
        </MemoryRouter>)
    })
    
    expect(screen.getByText(/test drive form/i)).toBeInTheDocument()
  });
});
