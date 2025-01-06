'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import CategoryDropDown from './categoryDropdown';
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
} from './page.css';

const ExperienceRegister = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [introImages, setIntroImages] = useState<File[]>([]);
  const [address, setAddress] = useState<string>('');
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [price, setPrice] = useState<string>('');
  const [priceError, setPriceError] = useState<string | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  const handleAddDate = () => {
    if (selectedDate) {
      const year = selectedDate.getFullYear().toString().slice(-2);
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day}`;
      setDates([...dates, formattedDate]);
      setSelectedDate(undefined);
      setIsCalendarVisible(false);
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

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className={mainContainer}>
        {!isMobile && <SideNavigationMenu />}
        <div className={sideContainer}>
          <div className={qqq}>
            <h1>내 체험 등록</h1>
            <CustomButton mode="experienceRegistration">등록하기</CustomButton>
          </div>
          <input
            className={`${contentContainer} ${inputWithPlaceholder}`}
            type="text"
            placeholder="제목"
            style={{ marginBottom: '20px' }}
          />
          <CategoryDropDown />
          <textarea
            className={`${discriptionContainer} ${inputWithPlaceholder}`}
            placeholder="설명"
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
              <p>
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
            <Image
              src="../../../icons/plusbutton.svg"
              alt="추가버튼"
              width={56}
              height={56}
              onClick={handleAddDate}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={line}></div>
          <div>
            {dates.map((date, index) => (
              <div key={index} className={addedDateWrapper}>
                <div className={addedDateContainer}>{date}</div>
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

