// src/components/EventList.js
import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { events } from '../data/el'; // Import mock data

const EventListContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const EventList = () => {
  return (
    <EventListContainer>
      <h2>Event List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.venue}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </EventListContainer>
  );
};

export default EventList;
