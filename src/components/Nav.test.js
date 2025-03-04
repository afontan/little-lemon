import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../components/Nav";

describe("Nav Component", () => {
  test("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Menu/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Book a table/i })).toBeInTheDocument();
  });

  test("links have correct href attributes", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /Menu/i })).toHaveAttribute("href", "/menu");
    expect(screen.getByRole("link", { name: /Book a table/i })).toHaveAttribute("href", "/reservations");
  });
});
