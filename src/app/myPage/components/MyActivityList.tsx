import React, { useState, useEffect } from 'react';
import {
  myExperienceContainer,
  header,
  Container,
  headerTitle,
  reservationList,
  emptyList,
} from './MyActivityList.css';
import CustomButton from '@/components/CustomButton';
import MyExperienceCard from './MyActivityCard';
import { MyActivities } from '@/types/MyActivityList';
import EmptyListIcon from '../../../../public/icons/empty_list.svg';

export default function MyExperienceSettings() {
  const [myActivities, setMyActivities] = useState<MyActivities[]>([]);

  useEffect(() => {
    async function fetchMyActivities() {
      try {
        const url = 'https://sp-globalnomad-api.vercel.app/10-2/my-activities';

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch MyActivities');
        }

        const data = await res.json();
        const fetchedMyActivities: MyActivities[] = data.myActivities;

        setMyActivities(fetchedMyActivities);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMyActivities();
  }, []);

  return (
    <div className={Container}>
      <div className={myExperienceContainer}>
        <div className={header}>
          <h2 className={headerTitle}>내 체험 관리</h2>
          <CustomButton mode="experienceRegistration" />
        </div>
        <div className={reservationList}>
          {myActivities.map((activityGroup) =>
            activityGroup.activities.map((activity) => (
              <MyExperienceCard key={activity.id} {...activity} />
            ))
          )}

          {myActivities.length === 0 && (
            <div>
              <EmptyListIcon className={emptyList} />
              <p>아직 등록한 체험이 없어요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
