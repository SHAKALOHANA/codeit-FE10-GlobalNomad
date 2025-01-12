'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import Calendar from './FullCalendar';
import ReservationModal from './ReservationModal';

import { mainContainer, sideContainer } from './page.css';

const Precondition = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className={mainContainer}>
        {!isMobile && <SideNavigationMenu />}
        <div className={sideContainer}>
          <ReservationModal />
          <h1>예약 현황</h1>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Precondition;

