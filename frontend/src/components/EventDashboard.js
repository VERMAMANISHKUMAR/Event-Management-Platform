import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/styles/EventDashboard.css';
import EventImage1 from '../assets/image/UpcomingEvent/eventImg-1.avif';
import EventImage2 from '../assets/image/UpcomingEvent/eventImg-2.avif';
import EventImage3 from '../assets/image/UpcomingEvent/eventImg-3.avif';

const UpcomingEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Array of events
  const events = [
    {
      title: "Tech Conference 2025",
      description: "Join us for an exciting conference to explore the latest trends in technology.",
      date: "10th March 2025",
      image: EventImage1,
    },
    {
      title: "Business Summit 2025",
      description: "An exclusive opportunity to network with top business leaders and entrepreneurs.",
      date: "15th March 2025",
      image: EventImage2,
    },
    {
      title: "Marketing Workshop 2025",
      description: "Learn new marketing strategies and techniques from industry experts.",
      date: "20th March 2025",
      image: EventImage3,
    },
  ];

  // Filter events based on the search term
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      {/* Upcoming Events Section */}
      <section id="upcoming-events">
        <h2 className="text-center mb-4">EventDashboards</h2>

        {/* Search Input */}
        <div className="mb-4 text-center">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="row">
          {/* Map through the filtered events */}
          {filteredEvents.map((event, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card mb-4 shadow-sm">
                <img src={event.image} alt="Event" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="text-muted">Date: {event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
