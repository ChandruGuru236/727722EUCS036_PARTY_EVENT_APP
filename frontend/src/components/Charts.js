import React from 'react';
import styled from 'styled-components';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartContainer = styled.div`
  background-color: #2d3748;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-width: 300px;
  color: #ffffff;
`;

const ChartTitle = styled.h3`
  margin-bottom: 10px;
  color: #e2e8f0;
`;

const Charts = ({ title, type }) => {
  const data = {
    line: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Data 1',
          data: [30, 20, 50, 40, 70, 50, 60],
          fill: false,
          backgroundColor: '#8b5cf6',
          borderColor: '#8b5cf6',
        },
        {
          label: 'Data 2',
          data: [20, 30, 40, 50, 60, 70, 80],
          fill: false,
          backgroundColor: '#22d3ee',
          borderColor: '#22d3ee',
        },
      ],
    },
    bar: {
      labels: ['Venue 1', 'Venue 2', 'Venue 3', 'Venue 4', 'Venue 5'],
      datasets: [
        {
          label: 'Revenue',
          data: [1200, 1900, 3000, 5000, 2000],
          backgroundColor: [
            '#ef4444',
            '#22d3ee',
            '#8b5cf6',
            '#f59e0b',
            '#10b981',
          ],
        },
      ],
    },
    doughnut: {
      labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4'],
      datasets: [
        {
          label: 'Attendance',
          data: [300, 50, 100, 150],
          backgroundColor: ['#6366f1', '#14b8a6', '#10b981', '#f43f5e'],
        },
      ],
    },
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      {type === 'line' && <Line data={data.line} />}
      {type === 'bar' && <Bar data={data.bar} />}
      {type === 'doughnut' && <Doughnut data={data.doughnut} />}
    </ChartContainer>
  );
};

export default Charts;
