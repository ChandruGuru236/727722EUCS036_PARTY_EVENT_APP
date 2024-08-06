// src/components/EventDetails.js
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { eventDetails } from '../data/ed'; // Import mock data

const EventDetailsContainer = styled.div`
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #1a202c;
  margin-bottom: 20px;
`;

const DetailsItem = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #4a5568;
`;

const Value = styled.span`
  color: #2d3748;
`;

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetails[id] || {};

  return (
    <EventDetailsContainer>
      <Title>Event Details</Title>
      <DetailsItem>
        <Label>Name:</Label> <Value>{event.name}</Value>
      </DetailsItem>
      <DetailsItem>
        <Label>Date:</Label> <Value>{event.date}</Value>
      </DetailsItem>
      <DetailsItem>
        <Label>Venue:</Label> <Value>{event.venue}</Value>
      </DetailsItem>
      <DetailsItem>
        <Label>Status:</Label> <Value>{event.status}</Value>
      </DetailsItem>
      <DetailsItem>
        <Label>Description:</Label> <Value>{event.description}</Value>
      </DetailsItem>
      {event.additionalInfo && (
        <DetailsItem>
          <Label>Additional Info:</Label> <Value>{event.additionalInfo}</Value>
        </DetailsItem>
      )}
    </EventDetailsContainer>
  );
};

export default EventDetails;
