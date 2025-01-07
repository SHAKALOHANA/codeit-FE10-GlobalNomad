'use client';

import React from 'react';
import Image from 'next/image';
import * as S from './MyActivityCard.css';
import { MyActivityCardProps } from '@/types/MyActivitiesList';
import StarOnIcon from '../../../../public/icons/star_on.svg';
import MeatballIcon from '../../../../public/icons/meatball.svg';

export default function MyExperienceCard({ ...activity }: MyActivityCardProps) {
  return (
    <div className={S.cardContainer}>
      <div className={S.imageContainer}>
        <Image
          src={activity.bannerImageUrl}
          alt={`${activity.title} 배너 이미지`}
          fill
        />
      </div>
      <div className={S.activityInfoContainer}>
        <div className={S.ratingContainer}>
          <div className={S.ratingStar}>
            <StarOnIcon />
          </div>
          <p className={S.rating}>
            {activity.rating} {`(${activity.reviewCount})`}
          </p>
        </div>
        <h3 className={S.activityTitle}>{activity.title}</h3>
        <div className={S.activityPriceContainer}>
          <div className={S.activityPriceWrapper}>
            <p
              className={S.activityPrice}
            >{`￦${activity.price.toLocaleString()}`}</p>
            <p className={S.activityPriceUnit}> /인</p>
          </div>

          <MeatballIcon className={S.dropdown} />
        </div>
      </div>
    </div>
  );
}
