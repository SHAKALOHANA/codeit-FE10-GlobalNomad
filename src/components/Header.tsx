'use client';

import { useProfileContext } from '../app/context/ProfileContext';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle, linkStyle, linkAtrribute } from './Header.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const { isLoggedIn, profileImageUrl } = useProfileContext();
  const defaultProfileImage = '/images/defaultProfileImage.png';
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // 초기 화면 크기 세팅
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 모바일에서 아이콘 클릭 시 이동
  const handleIconClick = () => {
    if (isMobile) {
      window.location.href = '/mobile-navigation';
    }
  };

  return (
    <header className={headerStyle}>
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="로고"
          width={100}
          height={50}
          priority
        />
      </Link>
      <div className={linkStyle}>
        {isLoggedIn ? (
          <>
            <Link href="/my-notifications">
              <Image
                src="/icons/icon_notification.svg"
                alt="종모양 알림버튼"
                width={20}
                height={20}
                priority
              />
            </Link>
            <Link href="/my-info" onClick={handleIconClick}>
              <Image
                src={profileImageUrl || defaultProfileImage}
                alt="Profile"
                width= {32}
                height= {32}
                style={{borderRadius: '50%'}}
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/signin" className={linkAtrribute}>
              로그인
            </Link>
            <Link href="/signup" className={linkAtrribute}>
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
