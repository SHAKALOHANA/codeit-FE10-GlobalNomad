import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import StarRating from './StarRating';
import CustomButton from '@/components/CustomButton';
import * as S from './ReviewModal.css';
import Btn_X from '../../../../public/icons/btn_X.svg';
import { ReservationsType } from '@/types/MyReservationsList';

export default function ReviewModal({ ...reservation }: ReservationsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [starValue, setStarValue] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    console.log('별점:', starValue, '후기:', reviewText);

    // 후기 작성 API 호출
    setIsOpen(false);
  };

  return (
    <div>
      <CustomButton mode="writeReview" onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={S.reviewModalContainer}>
          <div className={S.reviewModalHeader}>
            <h2>후기 작성</h2>
            <button onClick={() => setIsOpen(false)}>
              <Btn_X className={S.modalCloseBtn} />
            </button>
          </div>
          <div className={S.activityInfoContainer}>
            <div className={S.activityImage}>
              <Image
                src={reservation.activity.bannerImageUrl}
                alt={`${reservation.activity.title} 배너 이미지`}
                fill
                priority
              />
            </div>
            <div className={S.activityInfo}>
              <h3 className={S.activityTitle}>{reservation.activity.title}</h3>
              <p
                className={S.activityDate}
              >{`${reservation.date} | ${reservation.startTime} ~ ${reservation.endTime} | ${reservation.headCount}명`}</p>
              <p
                className={S.activityPrice}
              >{`₩${reservation.totalPrice.toLocaleString()}`}</p>
            </div>
          </div>
          <div className={S.starRatingContainer}>
            <StarRating
              value={starValue}
              onChange={(newValue) => setStarValue(newValue)}
            />
          </div>
          <textarea
            className={S.reviewTextarea}
            placeholder="후기를 작성해주세요"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <CustomButton mode="write" onClick={handleSubmit} />
        </div>
      </Modal>
    </div>
  );
}
