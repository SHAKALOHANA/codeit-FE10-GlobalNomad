import React, { useEffect, useState } from 'react';
import {
  reservationContainer,
  buttonContainer,
  confirmedButton,
  declinedButton,
} from './ReservationContent.css';
import CustomButton from '../../components/CustomButton';

interface Reservation {
  nickname: string;
  headCount: number;
  totalPrice: number;
  id: number;
}

interface ReservationContentProps {
  selectedActivityId: string;
  scheduleId: string;
  activeTab: 'pending' | 'confirmed' | 'declined';
}

const ReservationContent: React.FC<ReservationContentProps> = ({
  selectedActivityId,
  scheduleId,
  activeTab,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (!scheduleId || !selectedActivityId) return;

        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNzMxNzE5MCwiZXhwIjoxNzM3MzE4OTkwLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.iX1cqOX0PoztNlP6r81C6NBN0jAYMLs2EDLPPW_Lb7s';

        const url = `https://sp-globalnomad-api.vercel.app/10-1/my-activities/${selectedActivityId}/reservations?size=10&scheduleId=${scheduleId}&status=${activeTab}`;

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

        setReservations(
          data.reservations.map((reservation: any) => ({
            nickname: reservation.nickname,
            headCount: reservation.headCount,
            totalPrice: reservation.totalPrice,
            id: reservation.id,
          }))
        );
      } catch (error) {
        console.error('예약 데이터 불러오기 실패:', error);
      }
    };

    fetchReservations();
  }, [selectedActivityId, scheduleId, activeTab]);

  const handleApproveReservation = async (id: number) => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNzM1MDY3NywiZXhwIjoxNzM3MzUyNDc3LCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.0KuvbeYp5txHf0DsLeEhBEiOlSX0UpTsDst0eCnfCNY';

      const url = `https://sp-globalnomad-api.vercel.app/10-1/my-activities/${selectedActivityId}/reservations/${id}`;
      const data = {
        status: 'confirmed',
      };

      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('예약 승인 실패:', errorText);
        alert(`예약 승인 실패: ${errorText || response.statusText}`);
        return;
      }

      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );

      console.log('예약 승인 성공');
    } catch (error) {
      console.error('예약 승인 중 오류 발생:', error);
      alert('예약 승인 중 오류 발생');
    }
  };

  return (
    <>
      {reservations.map((reservation) => (
        <div key={reservation.id} className={reservationContainer}>
          <p>{reservation.nickname}</p>
          <p>{reservation.headCount}명</p>
          {activeTab === 'pending' && (
            <div className={buttonContainer}>
              <CustomButton
                mode="reservationFinalize"
                onClick={() => handleApproveReservation(reservation.id)}
              >
                승인하기
              </CustomButton>
            </div>
          )}
          {activeTab === 'confirmed' && (
            <div className={buttonContainer}>
              <button className={confirmedButton}>예약 승인</button>
            </div>
          )}
          {activeTab === 'declined' && (
            <div className={buttonContainer}>
              <button className={declinedButton}>예약 거절</button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ReservationContent;

