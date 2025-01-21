'use client';

import { useProfileContext } from '../app/context/ProfileContext';
import Link from 'next/link';
import Image from 'next/image';
import { headerStyle, linkStyle, linkAtrribute } from './Header.css';

const Header = () => {
  const { isLoggedIn, profileImageUrl } = useProfileContext();

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
          <Link href="/profile">
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            />
          </Link>
        ) : (
          <Link href="/signin" className={linkAtrribute}>
            로그인
          </Link>
        )}
        <Link href="/signup" className={linkAtrribute}>
          회원가입
        </Link>
      </div>
    </header>
  );
};

export default Header;
