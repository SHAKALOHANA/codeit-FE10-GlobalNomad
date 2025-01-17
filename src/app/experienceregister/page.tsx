'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import CategoryDropDown from './CategoryDropdown';
import StartTimeDropDown from './StartTimeDropDown';
import EndTimeDropDown from './EndTimeDropDown';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import DaumPostcode from 'react-daum-postcode';
import CustomButton from '../../components/CustomButton';
import {
  mainContainer,
  sideContainer,
  contentContainer,
  discriptionContainer,
  dateContainer,
  reservationContainer,
  addedDateWrapper,
  addedDateContainer,
  calendarWrapper,
  line,
  postSearchButton,
  imageRegister,
  imagePreviewContainer,
  bannerContainer,
  introContainer,
  images,
  deleteButton,
  qqq,
  inputWithPlaceholder,
  tildeSymbol,
  addedStartTimeContainer,
  addedEndTimeContainer,
} from './page.css';

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface ActivityData {
  title: string;
  category: string;
  description: string;
  address: string;
  price: number;
  schedules: Schedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

const ExperienceRegister = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dates, setDates] = useState<
    { date: string; startTime: string; endTime: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<string>('시간선택');
  const [endTime, setEndTime] = useState<string>('시간선택');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [introImages, setIntroImages] = useState<File[]>([]);
  const [address, setAddress] = useState<string>('');
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [price, setPrice] = useState<string>('');
  const [priceError, setPriceError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleCategoryChange = (selectedCategory: string) => {
    console.log('선택된 카테고리:', selectedCategory);
    setCategory(selectedCategory);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  const handleAddDate = () => {
    if (selectedDate && startTime !== '시간선택' && endTime !== '시간선택') {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      setDates([...dates, { date: formattedDate, startTime, endTime }]);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setPrice(value);
      setPriceError(null);
    } else {
      setPriceError('가격은 숫자만 입력 가능합니다.');
    }
  };

  const handleCalendarClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleRemoveDate = (index: number) => {
    setDates(dates.filter((_, idx) => idx !== index));
  };

  const handleBannerImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleIntroImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).slice(0, 4 - introImages.length);
      setIntroImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handlePostcodeComplete = (data: any) => {
    setAddress(data.address);
    setIsPostcodeVisible(false);
  };

  const handlePostcodeClick = () => {
    setIsPostcodeVisible(true);
  };

  const handleSubmit = async () => {
    const requestData: ActivityData = {
      title,
      category,
      description,
      address,
      price: Number(price),
      schedules: dates.map((date) => ({
        date: date.date,
        startTime: date.startTime,
        endTime: date.endTime,
      })),
      bannerImageUrl:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/10-1_1361_1736271222406.png',
      subImageUrls: [
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/10-1_1361_1736271352229.png',
      ],
    };

    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MSwidGVhbUlkIjoiMTAtMSIsImlhdCI6MTczNjI3NjEyMiwiZXhwIjoxNzM2Mjc3OTIyLCJpc3MiOiJzcC1nbG9iYWxub21hZCJ9.h74PY6G1hbQvxaLTlj36ln7__b0CivI7nexUpn2UKG4';
      const response = await fetch(
        'https://sp-globalnomad-api.vercel.app/10-1/activities',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        alert('성공');
      } else {
        const errorText = await response.text();
        console.error('API 응답 실패:', errorText);
        alert('실패');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('에러 발생');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={mainContainer}>
        {!isMobile && <SideNavigationMenu />}
        <div className={sideContainer}>
          <div className={qqq}>
            <h1>내 체험 등록</h1>
            <CustomButton mode="experienceRegistration" onClick={handleSubmit}>
              등록하기
            </CustomButton>
          </div>
          <input
            className={`${contentContainer} ${inputWithPlaceholder}`}
            type="text"
            placeholder="제목"
            style={{ marginBottom: '20px' }}
            onChange={handleTitleChange}
          />
          <CategoryDropDown onCategorySelect={handleCategoryChange} />
          <textarea
            className={`${discriptionContainer} ${inputWithPlaceholder}`}
            placeholder="설명"
            onChange={handleDescriptionChange}
          />

          <h2>가격</h2>
          <input
            className={`${contentContainer} ${inputWithPlaceholder}`}
            type="text"
            placeholder="가격"
            value={price}
            onChange={handlePriceChange}
          />
          {priceError && (
            <p style={{ color: 'red', fontSize: '12px' }}>{priceError}</p>
          )}

          <h2>주소</h2>
          <div style={{ position: 'relative' }}>
            <input
              className={`${contentContainer} ${inputWithPlaceholder}`}
              type="text"
              placeholder="주소를 입력해주세요"
              value={address}
              readOnly
            />
            <button className={postSearchButton} onClick={handlePostcodeClick}>
              우편번호 검색
            </button>
          </div>
          {isPostcodeVisible && (
            <DaumPostcode onComplete={handlePostcodeComplete} />
          )}

          <h2>예약 가능한 시간대</h2>
          <div className={reservationContainer}>
            <div className={dateContainer}>
              <p
                style={{
                  color: selectedDate ? 'black' : '#a1a1a1',
                }}
              >
                {selectedDate
                  ? `${selectedDate.getFullYear().toString().slice(-2)}/${(
                      selectedDate.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, '0')}/${selectedDate
                      .getDate()
                      .toString()
                      .padStart(2, '0')}`
                  : 'YY/MM/DD'}
              </p>
              <Image
                src="../../../icons/calendar.svg"
                alt="달력버튼"
                width={32}
                height={32}
                style={{ position: 'absolute', right: '8px' }}
                onClick={handleCalendarClick}
              />
              {isCalendarVisible && (
                <div className={calendarWrapper}>
                  <DayPicker
                    selected={selectedDate}
                    onDayClick={(date) => {
                      setSelectedDate(date);
                      setIsCalendarVisible(false);
                    }}
                  />
                </div>
              )}
            </div>
            <StartTimeDropDown onChange={setStartTime} selected={startTime} />
            <p className={tildeSymbol}>~</p>
            <EndTimeDropDown onChange={setEndTime} selected={endTime} />
            <Image
              src="../../../icons/plusbutton.svg"
              alt="추가버튼"
              width={56}
              height={56}
              onClick={handleAddDate}
              style={{
                cursor:
                  startTime === '시간선택' ||
                  endTime === '시간선택' ||
                  !selectedDate
                    ? 'not-allowed'
                    : 'pointer',
                opacity:
                  startTime === '시간선택' ||
                  endTime === '시간선택' ||
                  !selectedDate
                    ? 0.5
                    : 1,
              }}
            />
          </div>
          <div className={line}></div>
          <div>
            {dates.map((dateInfo, index) => (
              <div key={index} className={addedDateWrapper}>
                <div className={addedDateContainer}>{dateInfo.date}</div>
                <div className={addedStartTimeContainer}>
                  {dateInfo.startTime}
                </div>
                <p className={tildeSymbol}>~</p>
                <div className={addedEndTimeContainer}>{dateInfo.endTime}</div>
                <Image
                  src="../../../icons/minusbutton.svg"
                  alt="빼기버튼"
                  width={56}
                  height={56}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveDate(index)}
                />
              </div>
            ))}
          </div>

          <h2>배너 이미지</h2>
          <div className={bannerContainer}>
            <label htmlFor="banner-upload" className={imageRegister}>
              <input
                id="banner-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleBannerImageChange}
              />
              {bannerImage ? '이미지 변경' : '이미지 업로드'}
            </label>
            {previewUrl && (
              <div style={{ position: 'relative' }}>
                <img className={images} src={previewUrl} alt="배너 이미지" />
                <img
                  src="../../../icons/xbutton.svg"
                  alt="삭제 버튼"
                  className={deleteButton}
                  onClick={() => {
                    setBannerImage(null);
                    setPreviewUrl(null);
                  }}
                  role="button"
                />
              </div>
            )}
          </div>

          <h2>소개 이미지</h2>
          <div className={introContainer}>
            <label htmlFor="intro-upload" className={imageRegister}>
              <input
                id="intro-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleIntroImageChange}
              />
              이미지 업로드
            </label>

            {introImages.map((image, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <img
                  className={images}
                  src={URL.createObjectURL(image)}
                  alt={`소개 이미지 ${index + 1}`}
                />
                <img
                  src="../../../icons/xbutton.svg"
                  alt="이미지 삭제"
                  className={deleteButton}
                  onClick={() =>
                    setIntroImages((prevImages) =>
                      prevImages.filter((_, idx) => idx !== index)
                    )
                  }
                  role="button"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceRegister;

