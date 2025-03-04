import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Specials from "../components/Specials";

jest.mock("../components/SpecialsCard", () => ({ image, title, description, price }) => (
  <div data-testid="specials-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{price}</span>
  </div>
));

describe("Specials Component", () => {
  test("renders the specials title", () => {
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );

    expect(screen.getByText("This Week's Specials")).toBeInTheDocument();
  });

  test("renders the Check our Menu button", () => {
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /Check our Menu!/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Check our Menu!/i })).toHaveAttribute("href", "/menu");
  });

  test("renders three specials cards", () => {
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );

    const cards = screen.getAllByTestId("specials-card");
    expect(cards).toHaveLength(3);
  });

  test("renders correct special dishes", () => {
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );

    expect(screen.getByText("Greek Salad")).toBeInTheDocument();
    expect(screen.getByText("Bruschetta")).toBeInTheDocument();
    expect(screen.getByText("Lemon Dessert")).toBeInTheDocument();
  });

  test("renders correct prices for specials", () => {
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );

    expect(screen.getByText("12.99")).toBeInTheDocument();
    expect(screen.getByText("5.99")).toBeInTheDocument();
    expect(screen.getByText("5.00")).toBeInTheDocument();
  });
});
