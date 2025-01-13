'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import Calendar from './FullCalendar';
import ExperienceNameDropdown from './ExperienceNameDropdown';

import { mainContainer, sideContainer } from './page.css';

const Precondition = () => {
  const [category, setCategory] = useState<string>('체험을 선택하세요');

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <Header />
      <div className={mainContainer}>
        <SideNavigationMenu />
        <div className={sideContainer}>
          <h1>예약 현황</h1>
          <ExperienceNameDropdown onCategorySelect={handleCategoryChange} />
          <Calendar selectedTitle={category} />
        </div>
      </div>
    </div>
  );
};

export default Precondition;

