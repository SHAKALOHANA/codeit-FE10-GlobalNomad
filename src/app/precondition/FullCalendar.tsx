'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import koLocale from '@fullcalendar/core/locales/ko';

const Calendar: React.FC = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2025-01-10' },
    { title: 'Event 2', date: '2025-01-15' },
  ]);

  const handleDateClick = (info: { dateStr: string }) => {
    const newEvent = prompt('Event Title:');
    if (newEvent) {
      setEvents([...events, { title: newEvent, date: info.dateStr }]);
    }
  };

  const handleEventClick = (arg: EventClickArg) => {
    alert(`Clicked on event: ${arg.event.title}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      events={events}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      locale={koLocale}
      dayHeaderFormat={{ weekday: 'short' }}
      dayCellContent={(arg) => {
        return <div>{arg.dayNumberText.replace('일', '')}</div>;
      }}
    />
  );
};

export default Calendar;

