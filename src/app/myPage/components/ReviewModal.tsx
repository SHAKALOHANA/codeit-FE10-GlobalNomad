import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import StarRating from './StarRating';
import CustomButton from '@/components/CustomButton';
import {
  reviewModalContainer,
  reviewModalHeader,
  modalCloseBtn,
  activityInfoContainer,
  activityInfo,
  activityImage,
  activityTitle,
  activityDate,
  activityPrice,
  starRatingContainer,
  reviewTextarea,
} from './ReviewModal.css';
import Btn_X from '../../../../public/icons/btn_x.svg';
import { Reservations } from '@/types/ReservationList';

export default function ReviewModal({ ...reservation }: Reservations) {
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
        <div className={reviewModalContainer}>
          <div className={reviewModalHeader}>
            <h2>후기 작성</h2>
            <button onClick={() => setIsOpen(false)}>
              <Btn_X className={modalCloseBtn} />
            </button>
          </div>
          <div className={activityInfoContainer}>
            <div className={activityImage}>
              <Image
                src={reservation.activity.bannerImageUrl}
                alt={`${reservation.activity.title} 배너 이미지`}
                fill
              />
            </div>
            <div className={activityInfo}>
              <h3 className={activityTitle}>{reservation.activity.title}</h3>
              <p
                className={activityDate}
              >{`${reservation.date} | ${reservation.startTime} ~ ${reservation.endTime} | ${reservation.headCount}명`}</p>
              <p
                className={activityPrice}
              >{`₩${reservation.totalPrice.toLocaleString()}`}</p>
            </div>
          </div>
          <div className={starRatingContainer}>
            <StarRating
              value={starValue}
              onChange={(newValue) => setStarValue(newValue)}
            />
          </div>
          <textarea
            className={reviewTextarea}
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
