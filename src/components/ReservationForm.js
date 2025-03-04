import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./styles/ReservationForm.css";

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
      .required("Telephone is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest is required")
      .max(20, "Maximum 20 guests allowed")
      .required("Number of guests is required"),
    date: Yup.date()
      .min(new Date(), "Date cannot be in the past")
      .required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      guests: "1",
      date: "",
      time: "09:00",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log("Submitting Reservation:", values);

      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/confirmation", { state: values });
      }, 2000);
    },
  });

  const generateTimeOptions = () => {
    const options = [];
    let hour = 17;
    let minute = 0;

    while (hour < 23 || (hour === 23 && minute === 0)) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
      minute += 30;
      if (minute === 60) {
        minute = 0;
        hour += 1;
      }
    }

    return options;
  };

  return (
    <div className="reservation-container">
      <h2>Reserve a Table</h2>
      <p>Please fill in and submit the form to book your reservation at Little Lemon.</p>
      <form onSubmit={formik.handleSubmit} className="reservation-form">

        <label>Full Name</label>
        <input type="text" name="name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}

        <label>Email</label>
        <input type="email" name="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

        <label>Telephone</label>
        <input type="tel" name="phone" {...formik.getFieldProps("phone")} />
        {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}

        <label>Guests</label>
        <input type="number" name="guests" {...formik.getFieldProps("guests")} />
        {formik.touched.guests && formik.errors.guests && <p className="error">{formik.errors.guests}</p>}

        <label>Date</label>
        <input type="date" name="date" {...formik.getFieldProps("date")} />
        {formik.touched.date && formik.errors.date && <p className="error">{formik.errors.date}</p>}

        <label>Time</label>
        <select name="time" {...formik.getFieldProps("time")}>
          {generateTimeOptions()}
        </select>
        {formik.touched.time && formik.errors.time && <p className="error">{formik.errors.time}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Reserve"}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
