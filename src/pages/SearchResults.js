import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import Navbar from './Navbar'
import { collegesData, coursesData, examsData } from '../data/data';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SearchResults = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const location = useLocation();
  const [results, setResults] = useState({ colleges: [], courses: [], exams: [] });

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || '';
    const term = query.toLowerCase();
    setSearchTerm(query); // update global state

    const matchedColleges = collegesData.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term)
    );

    const matchedCourses = coursesData.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
    );

    const matchedExams = examsData.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.details.toLowerCase().includes(term)
    );

    setResults({
      colleges: matchedColleges,
      courses: matchedCourses,
      exams: matchedExams,
    });
  }, [location.search, setSearchTerm]);

  return (
    <> <Navbar />
    <Container className="my-5">
        
      <h2>Search Results for "{searchTerm}"</h2>

      {/* Colleges */}
      <h4 className="mt-4">Colleges</h4>
      <Row>
        {results.colleges.length ? (
          results.colleges.map((college) => (
            <Col md={4} key={college.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{college.name}</Card.Title>
                  <Card.Text>
                    Location: {college.location}<br />
                    Rating: ⭐ {college.rating}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No matching colleges found.</p>
        )}
      </Row>

      {/* Courses */}
      <h4 className="mt-4">Courses</h4>
      <Row>
        {results.courses.length ? (
          results.courses.map((course) => (
            <Col md={4} key={course.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No matching courses found.</p>
        )}
      </Row>

      {/* Exams */}
      <h4 className="mt-4">Exams</h4>
      <Row>
        {results.exams.length ? (
          results.exams.map((exam) => (
            <Col md={4} key={exam.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{exam.name}</Card.Title>
                  <Card.Text>{exam.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No matching exams found.</p>
        )}
      </Row>
    </Container>
    </>
  );
};

export default SearchResults;
