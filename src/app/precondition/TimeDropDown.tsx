'use client';

import React, { useState, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './TimeDropDown.css';

interface TimeDropDownProps {
  onTimeSelect: (scheduleId: string) => void;
  selectedActivityId: string;
  selectedDate: string;
}

const TimeDropDown = ({
  onTimeSelect,
  selectedActivityId,
  selectedDate,
}: TimeDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('시간을 선택하세요');
  const [timeRanges, setTimeRanges] = useState<string[]>([]);
  const [scheduleIds, setScheduleIds] = useState<string[]>([]);

  const fetchTimeRanges = async () => {
    if (!selectedActivityId || !selectedDate) return;

    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNzIyNTczNCwiZXhwIjoxNzM3MjI3NTM0LCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.Q6zxT7DlD_PQU_b_3m685V-DZPNeKlck5TX82q8f588'; // 액세스 토큰을 여기에 채워넣으세요

      const response = await fetch(
        `https://sp-globalnomad-api.vercel.app/10-1/my-activities/${selectedActivityId}/reserved-schedule?date=${selectedDate}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch schedules: ${response.statusText}`);
      }

      const data = await response.json();

      const fetchedTimeRanges = data.map(
        (schedule: {
          startTime: string;
          endTime: string;
          scheduleId: string;
        }) => {
          setScheduleIds((prev) => [...prev, schedule.scheduleId]);
          return `${schedule.startTime} ~ ${schedule.endTime}`;
        }
      );

      setTimeRanges(fetchedTimeRanges);
    } catch (error) {
      console.error('Error fetching time ranges:', error);
    }
  };

  useEffect(() => {
    fetchTimeRanges();
  }, [selectedActivityId, selectedDate]);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (index: number) => {
    setSelectedTime(timeRanges[index]);
    setIsOpen(false);
    onTimeSelect(scheduleIds[index]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={CategoryMenuBox} onClick={onToggle}>
        <p
          style={{
            fontSize: '14px',
            color: selectedTime === '시간을 선택하세요' ? '#a1a1a1' : '#000000',
          }}
        >
          {selectedTime}
        </p>
        <img
          src="../../../icons/chevron_down.svg"
          alt="Chevron Down"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {isOpen && (
        <div className={DropDownBoxWrap}>
          <ul className={DropDownContainer}>
            {timeRanges.map((timeRange, index) => (
              <li
                key={index}
                className={ListItem}
                onClick={() => onOptionClicked(index)}
              >
                {timeRange}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeDropDown;

