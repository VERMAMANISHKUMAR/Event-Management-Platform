import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/AllEvents.css"; // Add your styles

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  // Generate 50 dummy events
  useEffect(() => {
    const generateDummyEvents = () => {
      const dummyEvents = [];
      for (let i = 1; i <= 51; i++) {
        dummyEvents.push({
          id: i,
          name: `Event ${i}`,
          description: `Description for event ${i}`,
          date: `2025-0${Math.floor(i / 12) + 1}-0${i % 28 + 1}`,
          time: `${(i % 12) + 1}:00 ${i % 2 === 0 ? "AM" : "PM"}`,
        });
      }
      setEvents(dummyEvents);
    };

    generateDummyEvents();
  }, []);

  // Handle delete event
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  // Handle join event
  const handleJoin = (eventName) => {
    alert(`You have joined ${eventName}!`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Events</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card shadow p-3">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/edit-event/${event.id}`} className="btn btn-warning eventbtn">Edit</Link>
                  <button className="btn btn-danger eventbtn" onClick={() => handleDelete(event.id)}>Delete</button>
                  <button className="btn btn-success eventbtn" onClick={() => handleJoin(event.name)}>Join</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
