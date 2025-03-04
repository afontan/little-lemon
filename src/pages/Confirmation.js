import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/styles/Confirmation.css";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const reservationData = location.state;

  if (!reservationData) {
    return <p>No reservation details available.</p>;
  }

  return (
    <div className="confirmation-background">
        <div className="confirmation-container">
        <h2>Reservation Confirmed!</h2>
        <p>Thank you, <strong>{reservationData.name}</strong>, for your reservation at Little Lemon.</p>
        <p><strong>Date:</strong> {reservationData.date}</p>
        <p><strong>Time:</strong> {reservationData.time}</p>
        <p><strong>Guests:</strong> {reservationData.guests}</p>
        <p><strong>Occasion:</strong> {reservationData.occasion}</p>
        <p>We look forward to serving you!</p>

        <button className="btn" onClick={() => navigate("/")}>Back to Home</button>
        </div>
    </div>
  );
};

export default ConfirmationPage;
