import React from 'react';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import MyActivitiesList from './components/MyActivitiesList';
import * as S from './page.css';

export default function MyReservationsPage() {
  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <MyActivitiesList />
    </div>
  );
}
