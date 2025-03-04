import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders the logo image with correct alt text", () => {
    render(<Footer />);
    const logoImage = screen.getByAltText("Little Lemon logo");
    expect(logoImage).toBeInTheDocument();
  });

  test("renders the restaurant description", () => {
    render(<Footer />);
    const description = screen.getByText(/Little Lemon is a charming neighborhood bistro/i);
    expect(description).toBeInTheDocument();
  });

  test("renders all location names", () => {
    render(<Footer />);
    expect(screen.getByText("California")).toBeInTheDocument();
  });

  test("renders opening times", () => {
    render(<Footer />);
    expect(screen.getByText("Mon - Thu: 16:30 - 24:00")).toBeInTheDocument();
    expect(screen.getByText("Fri: 16:30 - 1:00")).toBeInTheDocument();
    expect(screen.getByText("Sat - Sun: 10:30 - 1:00")).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("You know where!")).toBeInTheDocument();
    expect(screen.getByText("Tel: 987 6543 2101")).toBeInTheDocument();
    expect(screen.getByText("Email: info@littlelemon.com")).toBeInTheDocument();
  });

  test("renders the copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Little Lemon. All rights reserved./i)).toBeInTheDocument();
  });
});
