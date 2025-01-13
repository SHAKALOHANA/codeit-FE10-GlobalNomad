import React from 'react';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import * as S from './page.css';
import ReservationsList from './components/ReservationsList';

export default function MyReservationsPage() {
  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <ReservationsList />
    </div>
  );
}
