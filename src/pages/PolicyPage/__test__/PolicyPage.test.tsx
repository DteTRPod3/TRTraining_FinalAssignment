import React from "react";
import { act, render, screen } from "@testing-library/react";
import PolicyPage from "../PolicyPage";
import { MemoryRouter } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils/misc/wait";

describe("Policy Page tests", () => {
  it("renders the policy page", () => {
    render(
      <MemoryRouter>
        <PolicyPage />
      </MemoryRouter>
    );
    const policyHeader = screen.getByRole("heading", {
      name: /privacy policy/i,
    });
    expect(policyHeader).toBeInTheDocument();
  });
  it("should have the policy page title",async ()=>{
      render(
          <MemoryRouter>
              <PolicyPage />
          </MemoryRouter>
      )
      await act(() => expect(document.title).toEqual("Xtreme Cars | Policy Page"));
  })
});
