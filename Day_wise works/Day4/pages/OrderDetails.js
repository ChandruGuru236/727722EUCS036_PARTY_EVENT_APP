import React from 'react';
import styled from 'styled-components';
import { useOrders } from './OrderContext';

const OrdersContainer = styled.div`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OrderDetailsContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
 background: rgb(2,0,36);
background: linear-gradient(125deg, rgba(2,0,36,1) 0%, rgba(55,114,128,1) 7%, rgba(3,5,17,1) 18%, rgba(104,166,196,1) 80%, rgba(0,212,255,1) 100%);
  color: white;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const Title2 = styled.h1`
  text-align: center;
  color: #1a202c;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const OrderInfo = styled.div`
  margin-top: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &:last-child {
    border-bottom: none;
  }
`;

const Label2 = styled.label`
  font-weight: bold;
  color: #e2e8f0;
  font-size: 1.1rem;
`;

const Value2 = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
`;

const OrderDetails = ({ order }) => {
  return (
    <OrderDetailsContainer>
      <OrderInfo>
        <OrderItem>
          <Label2>Order Number:</Label2>
          <Value2>{order.orderNumber}</Value2>
        </OrderItem>
        <OrderItem>
          <Label2>Customer Name:</Label2>
          <Value2>{order.customerName}</Value2>
        </OrderItem>
        <OrderItem>
          <Label2>Event Date:</Label2>
          <Value2>{order.eventDate}</Value2>
        </OrderItem>
        <OrderItem>
          <Label2>Event Type:</Label2>
          <Value2>{order.eventType}</Value2>
        </OrderItem>
        <OrderItem>
          <Label2>Number of Guests:</Label2>
          <Value2>{order.numGuests}</Value2>
        </OrderItem>
        <OrderItem>
          <Label2>Additional Notes:</Label2>
          <Value2>{order.notes}</Value2>
        </OrderItem>
      </OrderInfo>
    </OrderDetailsContainer>
  );
};

const OrderList = () => {
  const { orders } = useOrders();

  return (
    <OrdersContainer>
      <Title2>Order List</Title2>
      {orders.map((order, index) => (
        <OrderDetails key={index} order={order} />
      ))}
    </OrdersContainer>
  );
};

export default OrderList;
