import React from 'react';
import styled from 'styled-components';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 6, 10),
    end: new Date(2024, 6, 12),
  },
  {
    title: 'Event 2',
    start: new Date(2024, 6, 15),
    end: new Date(2024, 6, 16),
  },
  // Add more events as needed
];

const EventCalendarContainer = styled.div`
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Titlew = styled.h2`
  color: #1a202c;
  margin-bottom: 20px;
`;

const EventCalendar = () => {
  return (
    <EventCalendarContainer>
      <Titlew>Event Calendar</Titlew>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </EventCalendarContainer>
  );
};

export default EventCalendar;