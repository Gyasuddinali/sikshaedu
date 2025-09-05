// pages/EngineeringPage.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './Navbar'
const engineeringInstitutes = [
  {
    name: "Indian Institute of Technology (IIT) Bombay",
    location: "Mumbai, Maharashtra",
    website: "https://www.iitb.ac.in",
  },
  {
    name: "Indian Institute of Technology (IIT) Delhi",
    location: "New Delhi",
    website: "https://home.iitd.ac.in",
  },
  {
    name: "Birla Institute of Technology and Science (BITS) Pilani",
    location: "Pilani, Rajasthan",
    website: "https://www.bits-pilani.ac.in",
  },
  {
    name: "Vellore Institute of Technology (VIT)",
    location: "Vellore, Tamil Nadu",
    website: "https://vit.ac.in",
  },
  {
    name: "Indian Institute of Technology (IIT) Madras",
    location: "Chennai, Tamil Nadu",
    website: "https://www.iitm.ac.in",
  },
];

function EngineeringPage() {
  return (
    <><Navbar/>
    <Container className="mt-5">
      <h3 className="mb-4 text-center">Top Engineering Institutes in India</h3>
      <Row>
        {engineeringInstitutes.map((institute, index) => (
          <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{institute.name}</Card.Title>
                <Card.Text>
                  Location: {institute.location}
                </Card.Text>
                <a
                  href={institute.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default EngineeringPage;
