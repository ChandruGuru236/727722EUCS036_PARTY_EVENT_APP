// src/pages/RevenuePage.js
import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueContainer = styled.div`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title5 = styled.h1`
  text-align: center;
  color: #1a202c;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 15000, 10000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Revenue for the Year',
    },
  },
};

const RevenuePage = () => {
  return (
    <RevenueContainer>
      <Title5>Yearly Revenue</Title5>
      <Bar data={data} options={options} />
    </RevenueContainer>
  );
};

export default RevenuePage;
