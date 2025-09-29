import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddCollege = ({ onAdd }) => {
  const [collegeName, setCollegeName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), collegeName, description });
    setCollegeName('');
    setDescription('');
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
      <Button type="submit" variant="success">Add College</Button>
    </Form>
  );
};

export default AddCollege;
