import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CollegeList = ({ colleges, onEdit, onDelete }) => {
  return (
    <div className="row">
      {colleges.map((college) => (
        <div className="col-md-4 mb-3" key={college.id}>
          <Card>
            <Card.Body>
              <Card.Title>{college.collegeName}</Card.Title>
              <Card.Text>{college.description}</Card.Text>
              <Button variant="primary" onClick={() => onEdit(college)}>Edit</Button>{' '}
              <Button variant="danger" onClick={() => onDelete(college.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;
