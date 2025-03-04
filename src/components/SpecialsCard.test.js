import React from "react";
import { render, screen } from "@testing-library/react";
import SpecialsCard from "../components/SpecialsCard";

describe("SpecialsCard Component", () => {
  const mockProps = {
    image: "test-image.jpg",
    title: "Test Dish",
    description: "This is a delicious test dish.",
    price: "10.99",
  };

  test("renders the food card with correct title", () => {
    render(<SpecialsCard {...mockProps} />);

    expect(screen.getByText("Test Dish")).toBeInTheDocument();
  });

  test("renders the correct description", () => {
    render(<SpecialsCard {...mockProps} />);

    expect(screen.getByText("This is a delicious test dish.")).toBeInTheDocument();
  });

  test("renders the correct price", () => {
    render(<SpecialsCard {...mockProps} />);

    expect(screen.getByText("$10.99")).toBeInTheDocument();
  });

  test("renders the order for delivery text", () => {
    render(<SpecialsCard {...mockProps} />);

    expect(screen.getByText("Order for delivery")).toBeInTheDocument();
  });

  test("renders the correct image with alt text", () => {
    render(<SpecialsCard {...mockProps} />);

    const image = screen.getByAltText("Test Dish");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });
});
