'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import SideNavigationMenu from '../../components/SideNavigationMenu';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import DaumPostcode from 'react-daum-postcode';
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
  imageButton,
  xButtonWrapper,
  introImageWrapper,
  postSearchButton,
} from './page.css';

const ExperienceRegister = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [introImages, setIntroImages] = useState<File[]>([]);
  const [address, setAddress] = useState<string>('');
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);

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

  const handleCalendarClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleRemoveDate = (index: number) => {
    setDates(dates.filter((_, idx) => idx !== index));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerImage(file);
    }
  };

  const handleRemoveImage = () => {
    setBannerImage(null);
  };

  const handleIntroImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      setIntroImages((prevImages) => [
        ...prevImages,
        ...Array.from(files).slice(0, 4 - prevImages.length),
      ]);
    }
  };

  const handleRemoveIntroImage = (index: number) => {
    setIntroImages(introImages.filter((_, idx) => idx !== index));
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
          <h2 style={{ marginTop: '0px' }}>내 체험 등록</h2>
          <input
            className={contentContainer}
            type="text"
            placeholder="제목"
            style={{ marginBottom: '20px' }}
          />
          <input
            className={contentContainer}
            type="text"
            placeholder="카테고리"
            style={{ marginBottom: '20px' }}
          />
          <input
            className={discriptionContainer}
            type="text"
            placeholder="설명"
          />
          <h2>가격</h2>
          <input className={contentContainer} type="text" placeholder="가격" />
          <h2>주소</h2>
          <div style={{ position: 'relative' }}>
            <input
              className={contentContainer}
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
              <p>YY/MM/DD</p>
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
                    onDayClick={setSelectedDate}
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              id="image-upload"
            />
            <label htmlFor="image-upload" className={imageButton}>
              <Image
                src="../../../icons/imageplus.svg"
                alt="이미지 등록"
                width={56}
                height={56}
                style={{ cursor: 'pointer' }}
              />
              <p>이미지 등록</p>
            </label>
            {bannerImage && (
              <div style={{ marginLeft: '30px', position: 'relative' }}>
                <Image
                  src={URL.createObjectURL(bannerImage)}
                  alt="업로드된 이미지"
                  width={180}
                  height={180}
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
                <div className={xButtonWrapper} onClick={handleRemoveImage}>
                  <Image
                    src="../../../icons/xbutton.svg"
                    alt="삭제버튼"
                    width={40}
                    height={40}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            )}
          </div>
          <h2>소개 이미지</h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="file"
              accept="image/*"
              multiple
              style={{ display: 'none' }}
              onChange={handleIntroImageChange}
              id="intro-image-upload"
            />
            <label htmlFor="intro-image-upload" className={imageButton}>
              <Image
                src="../../../icons/imageplus.svg"
                alt="이미지 등록"
                width={56}
                height={56}
                style={{ cursor: 'pointer' }}
              />
              <p>소개 이미지 등록</p>
            </label>
            <div className={introImageWrapper}>
              {introImages.map((file, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`소개 이미지 ${index + 1}`}
                    width={180}
                    height={180}
                    style={{ objectFit: 'cover', borderRadius: '12px' }}
                  />
                  <div
                    className={xButtonWrapper}
                    onClick={() => handleRemoveIntroImage(index)}
                  >
                    <Image
                      src="../../../icons/xbutton.svg"
                      alt="삭제버튼"
                      width={40}
                      height={40}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceRegister;

