import React from 'react'
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import EventList from './Events components/EventList';
import EventDetails from './Events components/EventDetails';
import AddEditEvent from './Events components/AddEditEvent';
import EventCalendar from './Events components/EventCalendar';

const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Eventcontent = () => {
  return (
    <div>
      
    <ApppContainer>
          <Sidebar />
          <MaincContent>
            <EventList/>
            <EventDetails/>
            <AddEditEvent/>
            <EventCalendar/>
          
          </MaincContent> 
    </ApppContainer>
  
    </div>
  )
}

export default Eventcontent;