import React from 'react';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const MetricBox = styled.div`
  background-color: #4a5568;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  text-align: center;
`;

const MetricTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #e2e8f0;
`;

const MetricValue = styled.p`
  font-size: 24px;
  color: #ffffff;
`;

const MetricSpan = styled.span`
  font-size: 16px;
  color: #a0aec0;
`;

const Metrics = () => {
  return (
    <MetricsContainer>
      <MetricBox>
        <MetricTitle>Avg First Reply Time</MetricTitle>
        <MetricValue>30 <MetricSpan>min</MetricSpan> 15 <MetricSpan>sec</MetricSpan></MetricValue>
      </MetricBox>
      <MetricBox>
        <MetricTitle>Avg Full Resolve Time</MetricTitle>
        <MetricValue>22 <MetricSpan>min</MetricSpan> 40 <MetricSpan>sec</MetricSpan></MetricValue>
      </MetricBox>
      <MetricBox>
        <MetricTitle>Messages</MetricTitle>
        <MetricValue>20%</MetricValue>
        <MetricTitle>Emails</MetricTitle>
        <MetricValue>33%</MetricValue>
      </MetricBox>
    </MetricsContainer>
  );
};

export default Metrics;
