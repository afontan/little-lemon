import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

jest.mock("./Nav", () => () => <nav data-testid="nav-component"></nav>);

describe("Header Component", () => {
  test("renders the logo with correct alt text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText("Little Lemon logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders the navigation component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navComponent = screen.getByTestId("nav-component");
    expect(navComponent).toBeInTheDocument();
  });

  test("logo links to home page", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
