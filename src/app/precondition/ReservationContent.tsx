// ReservationContent.tsx
import React from 'react';
import {
  reservationContainer,
  buttonContainer,
} from './ReservationContent.css';
import CustomButton from '../../components/CustomButton';

const ReservationContent: React.FC = () => {
  return (
    <>
      <div className={reservationContainer}>
        <p>홍길동</p>
        <p>3명</p>
        <div className={buttonContainer}>
          <CustomButton mode="reservationFinalize">승인하기</CustomButton>
          <CustomButton mode="reservationReject">거절하기</CustomButton>
        </div>
      </div>
      <div className={reservationContainer}>
        <p>김철수</p>
        <p>2명</p>
        <div className={buttonContainer}>
          <CustomButton mode="reservationFinalize">승인하기</CustomButton>
          <CustomButton mode="reservationReject">거절하기</CustomButton>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;

