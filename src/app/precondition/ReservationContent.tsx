import React, { useEffect, useState } from 'react';
import {
  reservationContainer,
  buttonContainer,
} from './ReservationContent.css';
import CustomButton from '../../components/CustomButton';

interface Reservation {
  nickname: string;
  headCount: number;
  totalPrice: number;
}

interface ReservationContentProps {
  selectedActivityId: string;
  scheduleId: string;
}

const ReservationContent: React.FC<ReservationContentProps> = ({
  selectedActivityId,
  scheduleId,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (!scheduleId || !selectedActivityId) return;

        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNzIyNTczNCwiZXhwIjoxNzM3MjI3NTM0LCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.Q6zxT7DlD_PQU_b_3m685V-DZPNeKlck5TX82q8f588'; // 토큰은 주석으로 남겨두고 실제로 채우세요
        const url = `https://sp-globalnomad-api.vercel.app/10-1/my-activities/${selectedActivityId}/reservations?size=10&scheduleId=${scheduleId}&status=pending`;

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
        console.log('예약 데이터:', data);

        setReservations(data.reservations);
      } catch (error) {
        console.error('예약 데이터 불러오기 실패:', error);
      }
    };

    fetchReservations();
  }, [selectedActivityId, scheduleId]);

  return (
    <>
      {reservations.length === 0 ? (
        <p>예약 내역이 없습니다.</p>
      ) : (
        reservations.map((reservation) => (
          <div key={reservation.nickname} className={reservationContainer}>
            <p>{reservation.nickname}</p>
            <p>{reservation.headCount}명</p>
            <div className={buttonContainer}>
              <CustomButton mode="reservationFinalize">승인하기</CustomButton>
              <CustomButton mode="reservationReject">거절하기</CustomButton>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ReservationContent;

