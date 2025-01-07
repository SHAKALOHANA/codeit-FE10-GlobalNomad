'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import * as S from './ReservationCard.css';
import {
  ReservationStatus,
  ReservationsType,
  statusToButtonMode,
} from '@/types/MyReservationsList';
import { translateStatus } from '@/utils/translateStatus';
import { isPastEvent } from '@/utils/isPastEvent';
import { useActivityNavigation } from '@/hooks/useActivityNavigation';

export default function ReservationCard({
  activity,
  status,
  totalPrice,
  headCount,
  date,
  startTime,
  endTime,
}: ReservationsType) {
  const getStatusEnum = (
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

  const statusEnum = getStatusEnum(status, date, startTime);
  const NavigateToActivity = useActivityNavigation();

  const statusMode = statusToButtonMode[statusEnum] ?? 'none';

  const variantClass = S.reservationStatus2[statusEnum];
  const combinedClassName = [S.reservationStatus1, variantClass].join(' ');

  const base64 = 'data:image/jpeg;base64,';
  const blurImg =
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII=';

  return (
    <div className={S.cardContainer}>
      <div
        className={S.imageContainer}
        onClick={() => NavigateToActivity(activity.id)}
      >
        <Image
          placeholder="blur"
          src={activity.bannerImageUrl}
          blurDataURL={base64 + blurImg}
          alt={activity.title}
          fill
          sizes="100%"
        />
      </div>
      <div className={S.activityInfoContainer}>
        <p className={combinedClassName}>{translateStatus(statusEnum)}</p>
        <h3 className={S.activityTitle}>
          <button
            className={S.titleButton}
            onClick={() => NavigateToActivity(activity.id)}
          >
            {activity.title}
          </button>{' '}
        </h3>
        <p
          className={S.activityDate}
        >{`${date} | ${startTime} ~ ${endTime} | ${headCount}명`}</p>
        <div className={S.priceContainer}>
          <p
            className={S.activityPrice}
          >{`￦${totalPrice.toLocaleString()}`}</p>
          <CustomButton mode={statusMode} />
        </div>
      </div>
    </div>
  );
}
