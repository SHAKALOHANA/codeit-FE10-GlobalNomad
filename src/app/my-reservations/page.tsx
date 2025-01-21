'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';
import { FIXED_OPTIONS } from '@/utils/translateStatus';
import {
  ReservationStatus,
  ReservationsType,
} from '@/types/MyReservationsList';

import SideNavigationMenu from '@/components/SideNavigationMenu';
import * as S from './page.css';
import ReservationsList from './components/ReservationsList';
import DropdownMenu from '@/components/Dropdown/DropdownMenu';
import DropdownBox from '@/components/Dropdown/DropdownBox';

const dropList = FIXED_OPTIONS.map((option) => ({
  label: option.label,
  value: option.value,
}));

export default function MyReservationsPage() {
  const [selectedStatus, setSelectedStatus] = useState<ReservationStatus | ''>(
    ''
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

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

  function handleStatusChange(value: string) {
    setSelectedStatus(value as ReservationStatus | '');
    setIsMenuOpen(false);
  }

  const selectedLabel =
    dropList.find((item) => item.value === selectedStatus)?.label || '필터';

  const filteredReservations = selectedStatus
    ? reservations.filter((r) => r.status === selectedStatus)
    : reservations;

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <div>
        <div className={S.headerContainer}>
          <h2 className={S.headerTitle}>예약 내역</h2>
          <div className={S.selectWrapper}>
            <DropdownBox onClick={handleButtonClick} label={selectedLabel} />
            <DropdownMenu
              items={dropList}
              onSelect={handleStatusChange}
              isVisible={isMenuOpen}
            />
          </div>
        </div>

        {isLoading ? (
          <p>불러오는 중...</p>
        ) : isError ? (
          <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        ) : (
          <ReservationsList reservations={filteredReservations} />
        )}
      </div>
    </div>
  );
}
