'use client';

import { useState } from 'react';
import {
  containerBox,
  profileImage,
  navigationBoxes,
  navigationBox,
  navigationBoxImage,
  activeNavigationBox,
  activeText,
  inactiveText,
} from './SideNavigationMenu.css';

const SideNavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={containerBox}>
      <div className={profileImage}></div>
      <div className={navigationBoxes}>
        <div>
          <div
            className={`${navigationBox} ${
              activeIndex === 0 ? activeNavigationBox : ''
            }`}
            onClick={() => handleClick(0)}
          >
            <img
              className={navigationBoxImage}
              src="../../../icons/myprofileicon.png"
              alt="My Profile"
            />
            <p className={activeIndex === 0 ? activeText : inactiveText}>
              내 정보
            </p>
          </div>
          <div
            className={`${navigationBox} ${
              activeIndex === 1 ? activeNavigationBox : ''
            }`}
            onClick={() => handleClick(1)}
          >
            <img
              className={navigationBoxImage}
              src="../../../icons/reservationdetail.png"
              alt="Reservation Details"
            />
            <p className={activeIndex === 1 ? activeText : inactiveText}>
              예약 내역
            </p>
          </div>
          <div
            className={`${navigationBox} ${
              activeIndex === 2 ? activeNavigationBox : ''
            }`}
            onClick={() => handleClick(2)}
          >
            <img
              className={navigationBoxImage}
              src="../../../icons/experiencemanage.png"
              alt="Experience Manage"
            />
            <p className={activeIndex === 2 ? activeText : inactiveText}>
              내 체험 관리
            </p>
          </div>
          <div
            className={`${navigationBox} ${
              activeIndex === 3 ? activeNavigationBox : ''
            }`}
            onClick={() => handleClick(3)}
          >
            <img
              className={navigationBoxImage}
              src="../../../icons/precondition.png"
              alt="Reservation Status"
            />
            <p className={activeIndex === 3 ? activeText : inactiveText}>
              예약현황
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationMenu;

