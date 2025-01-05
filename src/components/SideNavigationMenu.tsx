'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  containerBox,
  profileImage,
  editButton,
  navigationBoxes,
  navigationBox,
  navigationBoxImage,
  activeNavigationBox,
  activeText,
  inactiveText,
  activeImage,
  inactiveImage,
} from './SideNavigationMenu.css';

const SideNavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/myPage') {
      setActiveIndex(0);
    } else if (pathname === '/reservationContent') {
      setActiveIndex(1);
    } else if (pathname === '/experienceregister') {
      setActiveIndex(2);
    } else if (pathname === '/precondition') {
      setActiveIndex(3);
    }
  }, [pathname]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const maxSizeInMB = 5;

      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        alert('이미지 파일만 업로드할 수 있습니다. (jpg, jpeg, png, gif)');
        event.target.value = '';
        return;
      }

      if (file.size > maxSizeInMB * 1024 * 1024) {
        alert(`파일 크기는 최대 ${maxSizeInMB}MB를 초과할 수 없습니다.`);
        event.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={containerBox}>
      <div className={profileImage}>
        {profileImageSrc ? (
          <Image
            src={profileImageSrc}
            alt="프로필 이미지"
            width={160}
            height={160}
          />
        ) : (
          <div />
        )}
        <Image
          className={editButton}
          src="../../../icons/profileeditbutton.svg"
          alt="프로필편집버튼"
          width={44}
          height={44}
          onClick={() => document.getElementById('fileInput')?.click()}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfileImageChange}
        />
      </div>
      <div className={navigationBoxes}>
        <div
          className={`${navigationBox} ${
            activeIndex === 0 ? activeNavigationBox : ''
          }`}
          onClick={() => handleClick(0)}
        >
          <Image
            className={`${navigationBoxImage} ${
              activeIndex === 0 ? activeImage : inactiveImage
            }`}
            src="../../../icons/myprofileicon.svg"
            alt="내정보"
            width={24}
            height={24}
          />
          <p className={activeIndex === 0 ? activeText : inactiveText}>
            내 정보
          </p>
        </div>
        <div
          className={`${navigationBox} ${
            activeIndex === 1 ? activeNavigationBox : ''
          }`}
          onClick={() => handleClick(1)}
        >
          <Image
            className={`${navigationBoxImage} ${
              activeIndex === 1 ? activeImage : inactiveImage
            }`}
            src="../../../icons/reservationdetail.svg"
            alt="예약내역"
            width={24}
            height={24}
          />
          <p className={activeIndex === 1 ? activeText : inactiveText}>
            예약 내역
          </p>
        </div>
        <div
          className={`${navigationBox} ${
            activeIndex === 2 ? activeNavigationBox : ''
          }`}
          onClick={() => handleClick(2)}
        >
          <Image
            className={`${navigationBoxImage} ${
              activeIndex === 2 ? activeImage : inactiveImage
            }`}
            src="../../../icons/experiencemanage.svg"
            alt="내 체험 관리"
            width={24}
            height={24}
          />
          <p className={activeIndex === 2 ? activeText : inactiveText}>
            내 체험 관리
          </p>
        </div>
        <div
          className={`${navigationBox} ${
            activeIndex === 3 ? activeNavigationBox : ''
          }`}
          onClick={() => handleClick(3)}
        >
          <Image
            className={`${navigationBoxImage} ${
              activeIndex === 3 ? activeImage : inactiveImage
            }`}
            src="../../../icons/precondition.svg"
            alt="예약 현황"
            width={24}
            height={24}
          />
          <p className={activeIndex === 3 ? activeText : inactiveText}>
            예약현황
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationMenu;

