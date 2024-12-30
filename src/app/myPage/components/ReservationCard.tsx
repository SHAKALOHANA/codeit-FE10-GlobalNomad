import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import {
  cardContainer,
  imageContainer,
  reservationStatus1,
  reservationStatus2,
  activityTitle,
  activityDate,
  activityPrice,
  activityInfoContainer,
} from './ReservationCard.css';
import {
  ReservationStatus,
  Reservations,
  statusToButtonMode,
} from '@/types/ReservationList';
import { translateStatus } from '@/utils/translateStatus';
import { isPastEvent } from '@/utils/isPastEvent';

export const getStatusEnum = (
  status: string,
  date?: string,
  startTime?: string
): ReservationStatus => {
  switch (status) {
    case ReservationStatus.pending:
      return ReservationStatus.pending;
    case ReservationStatus.confirmed:
      return ReservationStatus.confirmed;
    case ReservationStatus.declined:
      return ReservationStatus.declined;
    case ReservationStatus.canceled:
      return ReservationStatus.canceled;
    case ReservationStatus.completed:
      if (date && startTime && isPastEvent(date, startTime)) {
        return ReservationStatus.completed_experience;
      }
      return ReservationStatus.completed;
    default:
      return ReservationStatus.pending;
  }
};

export default function ReservationCard({
  activity,
  status,
  totalPrice,
  headCount,
  date,
  startTime,
  endTime,
}: Reservations) {
  const statusEnum = getStatusEnum(status);

  const statusMode = statusToButtonMode[statusEnum] ?? 'none';

  const variantClass = reservationStatus2[statusEnum];
  const combinedClassName = [reservationStatus1, variantClass].join(' ');

  return (
    <>
      <div className={cardContainer}>
        <div className={imageContainer}>
          <Image src={activity.bannerImageUrl} alt={activity.title} fill />
        </div>
        <div className={activityInfoContainer}>
          <p className={combinedClassName}>{translateStatus(statusEnum)}</p>
          <h3 className={activityTitle}>{activity.title}</h3>
          <p
            className={activityDate}
          >{`${date} | ${startTime} ~ ${endTime} | ${headCount}명`}</p>
          <div>
            <p className={activityPrice}>{`₩${totalPrice.toLocaleString()}`}</p>
            <CustomButton mode={statusMode} />
          </div>
        </div>
      </div>
    </>
  );
}
