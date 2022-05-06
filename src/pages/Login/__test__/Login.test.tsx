import React from "react";
import { act, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/configureStore";
import Login from "../Login";

describe("Login Page tests", () => {
  it("should change the title of home page", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    await act(() => expect(document.title).toEqual("Xtreme Cars | Home Page"));
  });
});
