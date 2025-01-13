'use client';

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import ReservationModal from './ReservationModal';
import {
  pendingEvent,
  completedEvent,
  confirmedEvent,
} from './FullCalendar.css';

interface CalendarProps {
  selectedId: string;
}

const Calendar: React.FC<CalendarProps> = ({ selectedId }) => {
  const [events, setEvents] = useState<
    { title: string; date: string; classNames?: string[] }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const fetchEvents = async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNjgwMDU0MSwiZXhwIjoxNzM2ODAyMzQxLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.wn0icX6eRrgdXDtf_mRw__M5Gda9enqREXrYslkUC1w';

      const url = `https://sp-globalnomad-api.vercel.app/10-1/my-activities/${selectedId}/reservation-dashboard?year=${currentYear}&month=${String(
        currentMonth
      ).padStart(2, '0')}`;

      console.log('API 호출 URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error('API 호출 실패:', response.status, response.statusText);
        return;
      }

      const data = await response.json();
      console.log('API 응답 데이터:', data);

      if (!Array.isArray(data)) {
        console.error('Invalid data format:', data);
        return;
      }

      const apiEvents = data.flatMap((entry) => {
        const { date, reservations } = entry;
        const eventsForDate = [];

        if (reservations.pending > 0) {
          eventsForDate.push({
            title: `예약 ${reservations.pending}`,
            date,
            classNames: ['pending'],
          });
        }

        if (reservations.completed > 0) {
          eventsForDate.push({
            title: `완료 ${reservations.completed}`,
            date,
            classNames: ['completed'],
          });
        }

        if (reservations.confirmed > 0) {
          eventsForDate.push({
            title: `승인 ${reservations.confirmed}`,
            date,
            classNames: ['confirmed'],
          });
        }

        return eventsForDate;
      });

      setEvents(apiEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    if (selectedId) {
      fetchEvents();
    }
  }, [selectedId, currentYear, currentMonth]);

  const handleDateClick = (info: { dateStr: string }) => {
    setSelectedDate(info.dateStr);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
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
        locale={koLocale}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        dayHeaderFormat={{ weekday: 'short' }}
        dayCellContent={(arg) => (
          <div>{arg.dayNumberText.replace('일', '')}</div>
        )}
        eventContent={(eventInfo) => {
          let eventStyle = '';

          if (eventInfo.event.classNames.includes('pending')) {
            eventStyle = pendingEvent;
          } else if (eventInfo.event.classNames.includes('completed')) {
            eventStyle = completedEvent;
          } else if (eventInfo.event.classNames.includes('confirmed')) {
            eventStyle = confirmedEvent;
          }

          return (
            <div className={eventStyle}>
              <span>{eventInfo.event.title}</span>
            </div>
          );
        }}
      />
      <ReservationModal date={selectedDate} onClose={handleCloseModal} />
    </div>
  );
};

export default Calendar;

