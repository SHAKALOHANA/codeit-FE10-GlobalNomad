import React from 'react';
import Image from 'next/image';
import {
  cardContainer,
  imageContainer,
  activityInfoContainer,
  ratingStar,
  rating,
  activityTitle,
  activityPriceContainer,
  activityPrice,
  activityPriceUnit,
  dropdown,
} from './MyActivityCard.css';
import { MyActivityCardProps } from '@/types/MyActivityList';
import StarOnIcon from '../../../../public/icons/star_on.svg';
import MeatballIcon from '../../../../public/icons/meatball.svg';

export default function MyExperienceCard({ ...activity }: MyActivityCardProps) {
  return (
    <div className={cardContainer}>
      <div className={imageContainer}>
        <Image
          src={activity.bannerImageUrl}
          alt={`${activity.title} 배너 이미지`}
          fill
        />
      </div>
      <div className={activityInfoContainer}>
        <div>
          <StarOnIcon className={ratingStar} />

          <p className={rating}>
            {activity.rating} {`(${activity.reviewCount})`}
          </p>
        </div>
        <h3 className={activityTitle}>{activity.title}</h3>
        <div className={activityPriceContainer}>
          <div>
            <p
              className={activityPrice}
            >{`₩${activity.price.toLocaleString()}`}</p>
            <p className={activityPriceUnit}> /인</p>
          </div>

          <MeatballIcon className={dropdown} />
        </div>
      </div>
    </div>
  );
}
