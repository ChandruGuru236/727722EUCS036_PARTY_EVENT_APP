// src/components/AddEditEvent.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

const AddEditEventContainer = styled.div`
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Titlez = styled.h2`
  color: #1a202c;
  margin-bottom: 20px;
`;

const AddEditEvent = ({ event, onSave }) => {
  const [eventData, setEventData] = useState(event || {
    name: '',
    date: '',
    venue: '',
    status: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(eventData);
  };

  return (
    <AddEditEventContainer>
      <Titlez>{event ? 'Edit Event' : 'Add Event'}</Titlez>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Venue</Form.Label>
          <Form.Control
            type="text"
            name="venue"
            value={eventData.venue}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={eventData.status}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={eventData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {event ? 'Update Event' : 'Add Event'}
        </Button>
      </Form>
    </AddEditEventContainer>
  );
};

export default AddEditEvent;
