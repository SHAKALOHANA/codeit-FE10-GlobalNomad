'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import { mainContainer, sideContainer } from './page.css';

const experienceRegister = () => {
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
          <h2>내 체험 등록</h2>
        </div>
      </div>
    </div>
  );
};

export default experienceRegister;

