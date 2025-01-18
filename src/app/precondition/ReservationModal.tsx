'use client';

import React from 'react';
import Image from 'next/image';
import { modalContainer, header, menu } from './ReservationModal.css';
import TimeDropDown from './TimeDropDown';
import ReservationContent from './ReservationContent';

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
        <p>신청</p>
        <p>승인</p>
        <p>거절</p>
      </div>
      <h2>예약 날짜</h2>
      <p>{date}</p>
      <TimeDropDown
        selectedActivityId={selectedActivityId}
        selectedDate={date}
        onTimeSelect={(time) => console.log('선택된 시간:', time)}
      />
      <h2>예약 내역</h2>
      <ReservationContent />
    </div>
  );
};

export default ReservationModal;

