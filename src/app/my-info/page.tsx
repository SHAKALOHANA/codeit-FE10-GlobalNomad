import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import MobileSideNavigation from '@/components/SideNavigationMenu';
import MyInfo from './components/MyInfo';
import { breakpoints } from '@/styles/media';
import * as S from './page.css';

export default function MyPage() {
  const isMobile = useMediaQuery({
    maxWidth: parseInt(breakpoints.mobile, 10),
  });

  if (isMobile) {
    return (
      <div>
        <MobileSideNavigation />
      </div>
    );
  }

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <MyInfo />
    </div>
  );
}
