'use client';

import React, { useState, useEffect } from 'react';
import {
  DropDownContainer,
  DropDownBoxWrap,
  CategoryMenuBox,
  ListItem,
} from './TimeDropDown.css';

interface TimeDropDownProps {
  onTimeSelect: (timeRange: string) => void;
  selectedActivityId: number;
}

const TimeDropDown = ({
  onTimeSelect,
  selectedActivityId,
}: TimeDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('시간을 선택하세요');
  const [timeRanges, setTimeRanges] = useState<string[]>([]);

  const fetchTimeRanges = async (selectedActivityId: number) => {
    try {
      const response = await fetch(
        `https://sp-globalnomad-api.vercel.app/10-1/activities/${selectedActivityId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch schedules: ${response.statusText}`);
      }

      const data = await response.json();
      const fetchedTimeRanges = data.schedules.map(
        (schedule: { startTime: string; endTime: string }) =>
          `${schedule.startTime} ~ ${schedule.endTime}`
      );

      setTimeRanges(fetchedTimeRanges);
    } catch (error) {
      console.error('Error fetching time ranges:', error);
    }
  };

  useEffect(() => {
    if (selectedActivityId) {
      fetchTimeRanges(selectedActivityId);
    }
  }, [selectedActivityId]);

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedTime(value);
    setIsOpen(false);
    onTimeSelect(value);
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
                onClick={() => onOptionClicked(timeRange)}
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

