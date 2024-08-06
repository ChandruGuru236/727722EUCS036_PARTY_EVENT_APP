import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrders = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      orderNumber: '12345',
      customerName: 'John Doe',
      eventDate: '2024-08-15',
      eventType: 'Birthday Party',
      numGuests: 50,
      notes: 'Please arrange a vegan menu for some guests.'
    },
    {
      orderNumber: '12346',
      customerName: 'Jane Smith',
      eventDate: '2024-08-20',
      eventType: 'Wedding',
      numGuests: 100,
      notes: 'Allergic to peanuts.'
    },
    {
      orderNumber: '12347',
      customerName: 'Alice Johnson',
      eventDate: '2024-09-10',
      eventType: 'Corporate Event',
      numGuests: 200,
      notes: 'Need projector and sound system.'
    }
  ]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
