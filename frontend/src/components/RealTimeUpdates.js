import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UpdatesContainer = styled.div`
  background-color: #4a5568;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-width: 300px;
  color: #ffffff;
`;

const UpdatesTitle = styled.h3`
  margin-bottom: 10px;
  color: #e2e8f0;
`;

const UpdateItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2d3748;
  border-radius: 5px;
`;

const RealTimeUpdates = ({ title }) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdates((prevUpdates) => [
        ...prevUpdates,
        `Update at ${new Date().toLocaleTimeString()}`,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <UpdatesContainer>
      <UpdatesTitle>{title}</UpdatesTitle>
      {updates.map((update, index) => (
        <UpdateItem key={index}>{update}</UpdateItem>
      ))}
    </UpdatesContainer>
  );
};

export default RealTimeUpdates;
