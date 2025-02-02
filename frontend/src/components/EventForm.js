import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../assets/styles/Event.css';

const EventForm = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const formatIndianDate = (date) => {
    const indianDate = new Date(date);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return indianDate.toLocaleDateString("en-IN", options);
  };

  const formatIndianTime = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-IN", options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the date and time to Indian standard
    const formattedDate = formatIndianDate(eventDetails.eventDate);
    const formattedTime = formatIndianTime(eventDetails.eventTime);

    // Create form data (without image)
    const formData = new FormData();
    formData.append("eventName", eventDetails.eventName);
    formData.append("eventDescription", eventDetails.eventDescription);
    formData.append("eventDate", formattedDate);
    formData.append("eventTime", formattedTime);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/events`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData, // Send the FormData object containing only text fields
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Event Created Successfully!");
        setEventDetails({
          eventName: "",
          eventDescription: "",
          eventDate: "",
          eventTime: "",
        });
      } else {
        // Handle the error response from the server
        toast.error(result.message || "Something went wrong while creating the event.");
      }
    } catch (error) {
      console.error("Error details:", error); // Log the error details for debugging
      toast.error("Error connecting to the server. Please try again later.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="shadow-sm p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">
            Event Description
          </label>
          <textarea
            className="form-control"
            id="eventDescription"
            name="eventDescription"
            rows="3"
            value={eventDetails.eventDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            name="eventDate"
            value={eventDetails.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventTime" className="form-label">
            Event Time
          </label>
          <input
            type="time"
            className="form-control"
            id="eventTime"
            name="eventTime"
            value={eventDetails.eventTime}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Event
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EventForm;
