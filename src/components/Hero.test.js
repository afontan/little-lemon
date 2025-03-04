import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";

describe("Hero Component", () => {
  test("renders the restaurant name", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });

  test("renders the location name", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  test("renders the restaurant description", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        /We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i
      )
    ).toBeInTheDocument();
  });

  test("renders the Reserve a Table button", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: /Reserve a Table/i });
    expect(button).toBeInTheDocument();
  });

  test("Reserve a Table button links to the reservations page", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: /Reserve a Table/i });
    expect(link).toHaveAttribute("href", "/reservations");
  });

  test("renders the image with correct alt text", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const image = screen.getByAltText("Serving delicious dish");
    expect(image).toBeInTheDocument();
  });
});
