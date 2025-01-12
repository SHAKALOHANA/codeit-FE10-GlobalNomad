'use client';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import koLocale from '@fullcalendar/core/locales/ko';
import { headerToolbar, dayCellContent } from './FullCalendar.css';

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; date: string }[]>([]);

  const fetchEvents = async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNjY4NTY5MSwiZXhwIjoxNzM2Njg3NDkxLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9._-GHAiy01KudTYLiktHP_WTomHQil-xg_i-R6-nX8Nk';

      const response = await fetch(
        'https://sp-globalnomad-api.vercel.app/10-1/my-activities?size=40',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
      }

      const data = await response.json();

      const dateCount: { [key: string]: number } = {};
      data.activities.forEach((activity: { createdAt: string }) => {
        const date = activity.createdAt.split('T')[0];
        dateCount[date] = (dateCount[date] || 0) + 1;
      });

      const apiEvents = Object.entries(dateCount)
        .map(([date, count]) => {
          const title =
            count > 1 ? `예약 ${count}` : count === 1 ? '예약 1' : '';

          return title ? { title, date } : null;
        })
        .filter((event) => event !== null);

      setEvents(apiEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        locale={koLocale}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        dayHeaderFormat={{ weekday: 'short' }}
        dayCellContent={(arg) => (
          <div className={dayCellContent}>
            {arg.dayNumberText.replace('일', '')}
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;

