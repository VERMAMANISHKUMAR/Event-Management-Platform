import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Image1 from '../assets/image/UpcomingEvent/eventImg-1.avif'
import Image2 from '../assets/image/UpcomingEvent/eventImg-2.avif'
import Image3 from '../assets/image/UpcomingEvent/eventImg-3.avif'
import Image4 from '../assets/image/UpcomingEvent/eventImg-4.jpg' // New images for extra cards
import Image5 from '../assets/image/UpcomingEvent/eventImg-5.jpg'

const events = [
  { id: 1, name: "Tech Conference 2025", description: "An amazing tech event with keynote.", date: "10-05-2025", image: Image1 },
  { id: 2, name: "Music Festival", description: "Join us for an electrifying night of music!", date: "20-03-2025", image: Image2 },
  { id: 3, name: "Startup Meetup", description: "Networking for entrepreneurs and investors.", date: "07-06-2025", image: Image3 },
  { id: 4, name: "AI Workshop", description: "Learn the latest trends in AI.", date: "15-07-2025", image: Image4 },
  { id: 5, name: "Blockchain Summit", description: "Explore the world of blockchain technology.", date: "22-08-2025", image: Image5 },
  { id: 6, name: "Design Thinking Workshop", description: "Creative strategies for product design.", date: "25-09-2025", image: Image1 },
  { id: 7, name: "Cloud Computing Symposium", description: "Dive into the future of cloud technology.", date: "30-10-2025", image: Image2 },
  { id: 8, name: "Marketing Expo", description: "The best marketing strategies for 2025.", date: "15-11-2025", image: Image3 },
  { id: 9, name: "Networking Gala", description: "A premium networking event for professionals.", date: "20-12-2025", image: Image4 },
  { id: 10, name: "Hackathon 2025", description: "A 48-hour coding challenge.", date: "10-01-2025", image: Image5 },
  { id: 11, name: "Product Launch", description: "Introducing the latest tech products.", date: "12-02-2025", image: Image1 },
  { id: 12, name: "Cybersecurity Forum", description: "Protecting your business in the digital age.", date: "05-03-2025", image: Image2 },
  { id: 13, name: "Startup Pitch Night", description: "Pitch your startup ideas to investors.", date: "18-04-2025", image: Image3 },
  { id: 14, name: "Health Tech Conference", description: "Innovations in healthcare technology.", date: "15-05-2025", image: Image4 },
  { id: 15, name: "FinTech Summit", description: "The future of finance and technology.", date: "25-06-2025", image: Image5 }
];

const EventPage = () => {
  return (
    <Container className="my-5" style={{ marginLeft: "40px", marginRight: "40px" }}>
      {/* Top Slider */}
      <Carousel className="mb-4">
        {events.slice(0, 3).map((event, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={event.image}
              alt={event.name}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Event Cards Grid */}
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={event.image} height="200px" style={{ objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <p><strong>Date:</strong> {event.date}</p>
                <Button variant="primary" className="w-100">Join Event</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventPage;
