'use client';

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import koLocale from '@fullcalendar/core/locales/ko';
import ReservationModal from './ReservationModal';
import { headerToolbar, dayCellContent } from './FullCalendar.css';

interface CalendarProps {
  selectedTitle: string;
}

const Calendar: React.FC<CalendarProps> = ({ selectedTitle }) => {
  const [events, setEvents] = useState<{ title: string; date: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNjcwODA2MSwiZXhwIjoxNzM2NzA5ODYxLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.WTy11QmdbrKRBd9RZeGhNImJfM4hKuHC_NOsjByDzlI';

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

      const filteredActivities = data.activities.filter(
        (activity: { title: string }) => activity.title === selectedTitle
      );

      const dateCount: { [key: string]: number } = {};
      filteredActivities.forEach((activity: { createdAt: string }) => {
        const date = activity.createdAt.split('T')[0];
        dateCount[date] = (dateCount[date] || 0) + 1;
      });

      const apiEvents = Object.entries(dateCount).map(([date, count]) => ({
        title: count > 1 ? `예약 ${count}` : '예약 1',
        date,
      }));

      setEvents(apiEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    if (selectedTitle !== '체험을 선택하세요') {
      fetchEvents();
    }
  }, [selectedTitle]);

  const handleDateClick = (info: { dateStr: string }) => {
    setSelectedDate(info.dateStr); // 모달에 날짜 전달
  };

  const handleCloseModal = () => {
    setSelectedDate(null); // 모달 닫기
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
          <div className={dayCellContent}>
            {arg.dayNumberText.replace('일', '')}
          </div>
        )}
      />
      <ReservationModal date={selectedDate} onClose={handleCloseModal} />
    </div>
  );
};

export default Calendar;

