import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import styled from 'styled-components';


const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;



const Dashboardcontent = () => {
  return (<>
    
    <ApppContainer>
          <Sidebar />
          <MaincContent>

           <Dashboard />
          </MaincContent>
         
        </ApppContainer>
  </>
      
    
  );
};

export default Dashboardcontent;
