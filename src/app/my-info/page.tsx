import React from 'react';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import MyInfo from './components/MyInfo';
import * as S from './page.css';

export default function MyPage() {
  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <MyInfo />
    </div>
  );
}
