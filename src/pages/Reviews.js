
import Navbar from './Navbar';
import { Container, Card, Row, Col } from 'react-bootstrap';

const reviews = [
  {
    id: 1,
    college: "IIT Bombay",
    student: "Rahul S.",
    review: "Amazing campus and faculty. Loved the tech fests!",
    rating: 4.9,
  },
  {
    id: 2,
    college: "SRM University",
    student: "Priya M.",
    review: "Good infrastructure but placements could be better.",
    rating: 3.8,
  },
];

const Reviews = () => (
  <>
    <Navbar />
    <div className="bg-light py-4">
      <Container>
        <h2 className="mb-4">Student Reviews</h2>
        <Row>
          {reviews.map((r) => (
            <Col  xs={12} md={6} key={r.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{r.college}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {r.student} – ⭐ {r.rating}
                  </Card.Subtitle>
                  <Card.Text>{r.review}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </>
);

export default Reviews;

