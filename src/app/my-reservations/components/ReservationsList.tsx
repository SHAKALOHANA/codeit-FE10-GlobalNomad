'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReservationCard from './ReservationCard';
import * as S from './ReservationsList.css';
import { FIXED_OPTIONS } from '@/utils/translateStatus';
import { instance } from '../../../../apis/instance';
import {
  ReservationStatus,
  ReservationsType,
} from '@/types/MyReservationsList';
import EmptyListIcon from '../../../../public/icons/empty_list.svg';

export default function ReservationsList() {
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const {
    data: reservations = [],
    isLoading,
    isError,
  } = useQuery<ReservationsType[], Error>({
    queryKey: ['reservations'],
    queryFn: async () => {
      const { data } = await instance.get('/my-reservations');
      return data.reservations as ReservationsType[];
    },
  });

  let filteredReservations = reservations;

  if (selectedStatus) {
    filteredReservations = reservations.filter(
      (r) => r.status === selectedStatus
    );
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedStatus(e.target.value as ReservationStatus | '');
  }

  if (isLoading) {
    return <p className={S.reservationsContainer}>불러오는 중...</p>;
  }

  if (isError) {
    return <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>;
  }

  return (
    <div className={S.reservationsContainer}>
      <div className={S.headerContainer}>
        <h2 className={S.headerTitle}>예약 내역</h2>
        <label className={S.statusFilter}></label>
        <select
          className={S.statusFilterOptions}
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

      <div className={S.reservationList}>
        {filteredReservations.map((r) => (
          <ReservationCard key={r.id} {...r} />
        ))}

        {filteredReservations.length === 0 && (
          <div className={S.emptyListContainer}>
            <EmptyListIcon className={S.emptyList} />
            <p className={S.emptyMessage}>아직 예약한 체험이 없어요</p>
          </div>
        )}
      </div>
    </div>
  );
}
