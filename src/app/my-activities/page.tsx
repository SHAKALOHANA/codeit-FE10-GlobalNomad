'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';
import { MyActivityCardProps } from '@/types/MyActivitiesList';

import SideNavigationMenu from '@/components/SideNavigationMenu';
import MyActivitiesList from './components/MyActivitiesList';
import * as S from './page.css';
import CustomButton from '@/components/CustomButton';

export default function MyActivitiesPage() {
  const {
    data: myActivities = [],
    isLoading,
    isError,
  } = useQuery<MyActivityCardProps[], Error>({
    queryKey: ['myActivities'],
    queryFn: async () => {
      const { data } = await instance.get('/my-activities');
      return data.activities as MyActivityCardProps[];
    },
  });

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/experienceregister');
  };

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>

      <div>
        <div className={S.headerContainer}>
          <h2 className={S.headerTitle}>내 체험 관리</h2>
          <CustomButton
            mode="experienceRegistration"
            onClick={handleButtonClick}
          />
        </div>

        {isLoading ? (
          <p>불러오는 중...</p>
        ) : isError ? (
          <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        ) : (
          <MyActivitiesList activities={myActivities} />
        )}
      </div>
    </div>
  );
}
