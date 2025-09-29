import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditCollege = ({ currentCollege, onUpdate }) => {
  const [collegeName, setCollegeName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentCollege) {
      setCollegeName(currentCollege.collegeName);
      setDescription(currentCollege.description);
    }
  }, [currentCollege]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...currentCollege, collegeName, description });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>College Name</Form.Label>
        <Form.Control
          type="text"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">Update College</Button>
    </Form>
  );
};

export default EditCollege;
