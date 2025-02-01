import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/styles/UpcomingEvent.css';
import image1 from '../assets/image/UpcomingEvent/eventImg-1.avif';
import image2 from '../assets/image/UpcomingEvent/eventImg-2.avif';
import image3 from '../assets/image/UpcomingEvent/eventImg-3.avif';
import image4 from '../assets/image/UpcomingEvent/eventImg-4.jpg';
import image5 from '../assets/image/UpcomingEvent/eventImg-5.jpg';
import image7 from '../assets/image/UpcomingEvent/eventImg-7.jpg';

const UpcomingEvents = () => {

  // Handle joining an event
  const handleJoinEvent = (eventName) => {
    alert(`You have joined the ${eventName}!`);
  };

  return (
    <div className="container my-5">
      {/* Upcoming Events Section */}
      <section id="upcoming-events">
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card mb-4 shadow-sm">
              <img src={image1} alt="Event" />
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Join us for an exciting event to explore new opportunities.</p>
                <p className="text-muted">Date: 15th Feb 2025</p>
                <button className="btn btn-success" onClick={() => handleJoinEvent('Event 1')}>Join Event</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-4 shadow-sm">
              <img src={image2} alt="Event" />
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">A great chance to network with industry experts.</p>
                <p className="text-muted">Date: 20th Feb 2025</p>
                <button className="btn btn-success" onClick={() => handleJoinEvent('Event 2')}>Join Event</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card mb-4 shadow-sm">
              <img src={image3} alt="Event" />
              <div className="card-body">
                <h5 className="card-title">Event 3</h5>
                <p className="card-text">Learn the latest trends in technology and business.</p>
                <p className="text-muted">Date: 25th Feb 2025</p>
                <button className="btn btn-success" onClick={() => handleJoinEvent('Event 3')}>Join Event</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Card Slider */}
      <section id="card-slider" className="mt-5">
        <h3 className="text-center mb-4">Featured Cards</h3>
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={image4} alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Some brief description of the card content.</p>
                    <button className="btn btn-success" onClick={() => handleJoinEvent('Card 1')}>Join Event</button>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={image5} alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Some brief description of the card content.</p>
                    <button className="btn btn-success" onClick={() => handleJoinEvent('Card 2')}>Join Event</button>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={image7} alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Some brief description of the card content.</p>
                    <button className="btn btn-success" onClick={() => handleJoinEvent('Card 3')}>Join Event</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#card-slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#card-slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
