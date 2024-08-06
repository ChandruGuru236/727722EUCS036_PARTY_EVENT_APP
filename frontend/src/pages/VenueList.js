import React from 'react';
import styled from 'styled-components';
import { Card, Container, Row, Col } from 'react-bootstrap';

const VenueListWrapper = styled.div`
  padding: 20px;
  background-color: #edf2f7;
  min-height: 100vh;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VenueCard = styled(Card)`
  margin-bottom: 20px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const VenueCardBody = styled(Card.Body)`
  padding: 20px;
 background: rgb(2,0,36);
background: linear-gradient(125deg, rgba(2,0,36,1) 0%, rgba(3,5,17,1) 10%, rgba(3,35,51,1) 80%, rgba(0,212,255,1) 100%);
  color: white;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const VenueTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const VenueText = styled(Card.Text)`
  font-size: 1rem;
`;

const venues = [
  {
    name: 'Venue A',
    location: 'New York',
    capacity: 200,
    status: 'Available',
    details: 'This is a great venue located in New York.',
  },
  {
    name: 'Venue B',
    location: 'Los Angeles',
    capacity: 150,
    status: 'Booked',
    details: 'This venue is currently booked.',
  },
  {
    name: 'Venue C',
    location: 'Chicago',
    capacity: 300,
    status: 'Available',
    details: 'A spacious venue in Chicago perfect for large events.',
  },
  {
    name: 'Venue D',
    location: 'San Francisco',
    capacity: 100,
    status: 'Under Maintenance',
    details: 'This venue is under maintenance and not available for booking.',
  },
  {
    name: 'Venue E',
    location: 'Miami',
    capacity: 250,
    status: 'Available',
    details: 'A popular venue in Miami with great facilities.',
  },
  {
    name: 'Venue F',
    location: 'Dallas',
    capacity: 180,
    status: 'Booked',
    details: 'This venue is currently booked.',
  },
  {
    name: 'Venue G',
    location: 'Seattle',
    capacity: 220,
    status: 'Available',
    details: 'A modern venue in Seattle, perfect for tech events.',
  },
  {
    name: 'Venue H',
    location: 'Boston',
    capacity: 140,
    status: 'Available',
    details: 'A charming venue in Boston, great for weddings and parties.',
  },
  {
    name: 'Venue I',
    location: 'Houston',
    capacity: 190,
    status: 'Booked',
    details: 'This venue is currently booked.',
  },
  {
    name: 'Venue J',
    location: 'Philadelphia',
    capacity: 210,
    status: 'Available',
    details: 'A versatile venue in Philadelphia suitable for various events.',
  },
];

const VenueList = () => {
  return (
    <VenueListWrapper>
      <Container>
        <h2 className="mb-4">Venue List</h2>
        <Row>
          {venues.map((venue, index) => (
            <Col md={6} key={index}>
              <VenueCard>
                <VenueCardBody>
                  <VenueTitle>{venue.name}</VenueTitle>
                  <VenueText><strong>Location:</strong> {venue.location}</VenueText>
                  <VenueText><strong>Capacity:</strong> {venue.capacity}</VenueText>
                  <VenueText><strong>Status:</strong> {venue.status}</VenueText>
                  <VenueText>{venue.details}</VenueText>
                </VenueCardBody>
              </VenueCard>
            </Col>
          ))}
        </Row>
      </Container>
    </VenueListWrapper>
  );
};

export default VenueList;
