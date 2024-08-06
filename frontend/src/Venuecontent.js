import React from 'react'
import VenueList from './pages/VenueList';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';


const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
const Venuecontent = () => {
  return (
    <div>
         
         <ApppContainer>
          <Sidebar />
          <MaincContent>

           <VenueList />
          </MaincContent>
         
        </ApppContainer>
    </div>
  )
}

export default Venuecontent;