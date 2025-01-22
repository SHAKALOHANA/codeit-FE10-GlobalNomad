import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // DayPicker 기본 스타일
import * as styles from './ReservationBar.css';
import { scheduleTime } from '@/types/Schedules';

interface Props {
  price: number; // 1인당 가격
  schedules: scheduleTime[]; // 예약 가능한 날짜 및 시간
}

const ReservationBar: React.FC<Props> = ({ price, schedules }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [people, setPeople] = useState<number>(1);

  const availableDates = schedules.map((schedule) => new Date(schedule.date));

  // 선택된 날짜의 스케줄 확인
  const availableTimes =
    schedules
      .filter((schedule) =>
        selectedDate
          ? new Date(schedule.date).toDateString() ===
            selectedDate.toDateString()
          : false
      )
      .map(
        (schedule) => `${schedule.startTime} ~ ${schedule.endTime}`
      );

  // 총 가격 계산
  const totalPrice = price * people;

  return (
    <div className={styles.reservationBar}>
      <div className={styles.price}>
        <p>₩{price.toLocaleString()} / 인</p>
      </div>
      
      <hr />

      <p className={styles.smallLabel}>날짜</p>
      <div className={styles.calendar}>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{
            enabled: availableDates,
          }}
          modifiersClassNames={{
            enabled: styles.enabledDate,
          }}
        />
      </div>

      {selectedDate && availableTimes.length > 0 && (
        <div className={styles.timeSelectionContainer}>
          <p className={styles.smallLabel}>예약 가능 시간:</p>
          <div className={styles.timeButtons}>
            {availableTimes.map((time, index) => (
              <button
                key={index}
                className={`${styles.timeButton} ${
                  selectedTime === time ? styles.selectedTime : ''
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <hr />

      <div className={styles.peopleSelection}>
        <p className={styles.smallLabel}>참여 인원 수</p>
        <div className={styles.peopleButtons}>
          <button
            className={styles.iconButton}
            onClick={() => setPeople((prev) => Math.max(prev - 1, 1))}
          >
            <img src="/icons/countminus.svg" alt="Minus" />
          </button>
          <span className={styles.peopleCount}>{people}</span>
          <button
            className={styles.iconButton}
            onClick={() => setPeople((prev) => prev + 1)}
          >
            <img src="/icons/countplus.svg" alt="Plus" />
          </button>
        </div>
      </div>
      
      <button className={styles.reserveButton}>예약하기</button>

      <hr />

      <div className={styles.totalPrice}>
        <div>총 합계</div><div>₩ {totalPrice.toLocaleString()}</div>
      </div>

    </div>
  );
};

export default ReservationBar;
