import React from 'react';
import styled from 'styled-components';
import Metrics from '../components/Metrics';
import Charts from '../components/Charts';
import RealTimeUpdates from '../components/RealTimeUpdates';

const DashboardContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #1a202c;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Metrics />
      <ChartsContainer>
        <Charts title="Orders Overview" type="line" />
        <Charts title="Revenue by Venue" type="bar" />
        <Charts title="Event Attendance" type="doughnut" />
        <Charts title="Sales Over Time" type="line" />
        <RealTimeUpdates title="Real-Time Updates" />
      </ChartsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
