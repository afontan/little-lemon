import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("ReservationForm Component", () => {
  test("renders the form heading", () => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );

    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  });

  test("renders all form fields", () => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Telephone")).toBeInTheDocument();
    expect(screen.getByLabelText("Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Time")).toBeInTheDocument();
  });

  test("validates required fields", async () => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );

    const guestsInput = screen.getByLabelText (/Guests/i);
    fireEvent.change(guestsInput, { target: { value: '' }});
    const timeInput = screen.getByLabelText (/Time/i);
    fireEvent.change(timeInput, { target: { value: '' }});

    const submitButton = screen.getByRole("button", { name: /Reserve/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText("Full Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Telephone is required")).toBeInTheDocument();
    expect(await screen.findByText("Number of guests is required")).toBeInTheDocument();
    expect(await screen.findByText("Date is required")).toBeInTheDocument();
    expect(await screen.findByText("Time is required")).toBeInTheDocument();
  });

  test("allows user to fill and submit the form", async () => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Telephone"), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText("Guests"), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText("Date"), { target: { value: "2025-03-10" } });
    fireEvent.change(screen.getByLabelText("Time"), { target: { value: "18:30" } });

    const submitButton = screen.getByRole("button", { name: /Reserve/i });
    fireEvent.click(submitButton);

    await waitFor(() => expect(submitButton).toBeDisabled());
  });
});
