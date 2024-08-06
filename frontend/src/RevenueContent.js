import React from 'react';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import RevenuePage from './pages/RevenuePage';


const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;



const Revenuecontent = () => {
  return (<>
    
    <ApppContainer>
          <Sidebar />
          <MaincContent>

           <RevenuePage/>
          </MaincContent>
         
        </ApppContainer>
  </>
      
    
  );
};

export default Revenuecontent;