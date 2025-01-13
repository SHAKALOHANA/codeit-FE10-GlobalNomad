'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './MyActivitiesList.css';
import CustomButton from '@/components/CustomButton';
import MyActivityCard from './MyActivityCard';
import { instance } from '../../../../apis/instance';
import { MyActivityCardProps } from '@/types/MyActivitiesList';
import EmptyListIcon from '../../../../public/icons/empty_list.svg';

export default function MyActivitiesList() {
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

  const filteredActivities = myActivities;

  if (isLoading) {
    return <p>로딩 중입니다...</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는 데 실패했습니다.</p>;
  }

  return (
    <div className={S.container}>
      <div className={S.myActivitiesContainer}>
        <div className={S.header}>
          <h2 className={S.headerTitle}>내 체험 관리</h2>
          <CustomButton mode="experienceRegistration" />
        </div>

        <div className={S.reservationList}>
          {filteredActivities.map((r) => (
            <MyActivityCard key={r.id} {...r} />
          ))}

          {filteredActivities.length === 0 && (
            <div className={S.emptyListContainer}>
              <EmptyListIcon className={S.emptyList} />
              <p className={S.emptyMessage}>아직 등록한 체험이 없어요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
