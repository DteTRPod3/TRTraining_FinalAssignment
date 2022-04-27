import React from "react";
import { render, screen } from "@testing-library/react";
import TestDrive from "../TestDrive";
import { MemoryRouter } from "react-router-dom";

describe("Test Drive Form", () => {
    it("checks for all the input fields present or not",()=>{
        render(
            <MemoryRouter>
                <TestDrive></TestDrive>
            </MemoryRouter>
        )
        
        const inputName = screen.getByPlaceholderText(/enter name\.\.\./i)
        const inputContact = screen.getByPlaceholderText(/enter contact\.\.\./i)
        const inputAddress = screen.getByPlaceholderText(/enter address\.\.\./i)
        const inputEmail = screen.getByPlaceholderText(/enter email\.\.\./i)

        expect(inputName).toBeInTheDocument()
        expect(inputContact).toBeInTheDocument()
        expect(inputAddress).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
    })
    
});
