'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  modalContainer,
  header,
  menu,
  tabButton,
  selectedTab,
} from './ReservationModal.css';
import TimeDropDown from './TimeDropDown';
import ReservationContent from './ReservationContent';
import { instance } from '../../app/api/instance';

interface ReservationModalProps {
  date: string | null;
  selectedActivityId: string;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  date,
  selectedActivityId,
  onClose,
}) => {
  const [scheduleId, setScheduleId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<
    'pending' | 'confirmed' | 'declined'
  >('pending');
  const [scheduleCount, setScheduleCount] = useState<{
    pending: number;
    confirmed: number;
    declined: number;
  }>({
    pending: 0,
    confirmed: 0,
    declined: 0,
  });

  const handleTimeSelect = (
    selectedScheduleId: string,
    count: { pending: number; confirmed: number; declined: number }
  ) => {
    setScheduleId(selectedScheduleId);
    setScheduleCount(count);
  };

  const fetchScheduleCounts = async () => {
    if (!selectedActivityId || !date) return;

    try {
      const response = await instance.get(
        `/my-activities/${selectedActivityId}/reserved-schedule`,
        {
          params: { date },
        }
      );

      const data = response.data;

      const counts = data.reduce(
        (acc: any, schedule: any) => {
          acc.pending += schedule.count.pending;
          acc.confirmed += schedule.count.confirmed;
          acc.declined += schedule.count.declined;
          return acc;
        },
        { pending: 0, confirmed: 0, declined: 0 }
      );

      setScheduleCount(counts);
    } catch (error) {
      console.error('Error fetching schedule counts:', error);
    }
  };

  useEffect(() => {
    fetchScheduleCounts();
  }, [selectedActivityId, date, fetchScheduleCounts]);

  if (!date) return null;

  return (
    <div className={modalContainer}>
      <div className={header}>
        <h1>예약 정보</h1>
        <Image
          src="../../../icons/modalxbutton.svg"
          alt="창닫기버튼"
          width={40}
          height={40}
          style={{ cursor: 'pointer' }}
          onClick={onClose}
        />
      </div>

      <div className={menu}>
        <button
          className={activeTab === 'pending' ? selectedTab : tabButton}
          onClick={() => setActiveTab('pending')}
        >
          신청 {scheduleCount.pending}
        </button>
        <button
          className={activeTab === 'confirmed' ? selectedTab : tabButton}
          onClick={() => setActiveTab('confirmed')}
        >
          승인 {scheduleCount.confirmed}
        </button>
        <button
          className={activeTab === 'declined' ? selectedTab : tabButton}
          onClick={() => setActiveTab('declined')}
        >
          거절 {scheduleCount.declined}
        </button>
      </div>

      <h2>예약 날짜</h2>
      <p>{date}</p>

      <TimeDropDown
        selectedActivityId={selectedActivityId}
        selectedDate={date}
        onTimeSelect={handleTimeSelect}
      />

      <h2>예약 내역</h2>

      {scheduleId && (
        <ReservationContent
          selectedActivityId={selectedActivityId}
          scheduleId={scheduleId}
          activeTab={activeTab}
        />
      )}
    </div>
  );
};

export default ReservationModal;

