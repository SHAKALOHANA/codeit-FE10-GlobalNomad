import React, { useState, useEffect } from 'react';
import ReservationCard from './ReservationCard';
import {
  reservationsContainer,
  container,
  headerTitle,
  headerContainer,
  statusFilter,
  statusFilterOptions,
  reservationList,
} from './ReservationsList.css';
import { ReservationStatus, Reservations } from '@/types/ReservationList';
import { isPastEvent } from '@/utils/isPastEvent';
import { FIXED_OPTIONS } from '@/utils/translateStatus';

export default function ReservationsList() {
  const [reservations, setReservations] = useState<Reservations[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  useEffect(() => {
    async function fetchReservationsByStatus(statusValue: string) {
      try {
        const apiStatus =
          statusValue === 'completed_experience' ? 'completed' : statusValue;

        let url = 'https://sp-globalnomad-api.vercel.app/10-2/my-reservations';
        if (apiStatus) {
          url += `?status=${apiStatus}`;
        }

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch reservations');
        }

        const data = await res.json();
        let fetchedReservations: Reservations[] = data.reservations;

        if (statusValue === 'completed_experience') {
          fetchedReservations = fetchedReservations.filter((r) =>
            isPastEvent(r.date, r.startTime)
          );
        }

        setReservations(fetchedReservations);
      } catch (err) {
        console.error(err);
      }
    }

    fetchReservationsByStatus(selectedStatus);
  }, [selectedStatus]);

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedStatus(e.target.value as ReservationStatus | '');
  }

  const filteredReservations = reservations.filter((res) => {
    if (!selectedStatus) return true;
    return res.status === selectedStatus;
  });

  return (
    <div className={container}>
      <div className={reservationsContainer}>
        <div className={headerContainer}>
          <h2 className={headerTitle}>예약 내역</h2>
          <label className={statusFilter}>필터</label>
          <select
            className={statusFilterOptions}
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            {FIXED_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={reservationList}>
          {reservations.map((r) => (
            <ReservationCard key={r.id} {...r} />
          ))}

          {filteredReservations.length === 0 && (
            <p>아직 등록한 체험이 없어요</p>
          )}
        </div>
      </div>
    </div>
  );
}
