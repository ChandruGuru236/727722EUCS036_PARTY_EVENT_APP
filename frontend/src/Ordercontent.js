import React from 'react'
import Sidebar from './components/Sidebar';
import OrderList from './pages/OrderDetails';
import { OrderProvider } from './pages/OrderContext';
import styled  from 'styled-components';


const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
const Ordercontent = () => {
  return (
   
        
        <OrderProvider>
    
    
<ApppContainer>
    <Sidebar />
    <MaincContent>

    <OrderList/>
    </MaincContent>
   
  </ApppContainer>

       
        </OrderProvider>
   
  )
}

export default Ordercontent;