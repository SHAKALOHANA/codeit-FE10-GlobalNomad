'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  socialBtn,
  socialInfo,
  socialContainer,
  SNSBtnBox,
} from './SocialSignin.css';
import Image from 'next/image';

interface SocialLoginProps {
  setLoginError: (message: string) => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ setLoginError }) => {
  const router = useRouter();

  const handleLoginKakao = () => {
    const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY; // 카카오 앱 키
    const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao'; // 리디렉션 URI
    // 카카오 로그인 페이지로 리디렉션
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code`;
    window.location.href = url;
  };

  const handleLoginGoogle = async () => {
    const url = `https://winereview-api.vercel.app/10-1/auth/sign-in/google`;
    const appKey = process.env.NEXT_PUBLIC_GOOGLE_APP_KEY;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appKey: appKey,
        provider: 'google',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('구글 로그인 성공:', data);
      router.push('/signin'); // 구글 로그인 성공 시 리다이렉트
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || '소셜 로그인에 실패했습니다.';
      setLoginError(errorMessage);
      router.push(`/signin?error=${encodeURIComponent(errorMessage)}`);
    }
  };

  const handleSocialLogin = async (provider: 'kakao' | 'google') => {
    if (provider === 'kakao') {
      handleLoginKakao();
      return;
    }
    handleLoginGoogle();
  };
  // 인가 코드를 받아서 액세스 토큰을 요청하는 함수
  const fetchKakaoAccessToken = async (code: string) => {
    const response = await fetch('/api/auth/kakao/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Access Token:', data.access_token);
      // 여기에 액세스 토큰을 사용하여 추가 작업을 수행
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || '토큰 발급에 실패했습니다.';
      setLoginError(errorMessage);
      router.push(`/signin?error=${encodeURIComponent(errorMessage)}`);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchKakaoAccessToken(code); // 인가 코드를 사용하여 액세스 토큰 요청
    }
  }, []);

  return (
    <div className={socialContainer}>
      <div className={socialInfo}>
        <img src="/icons/Vector2499.svg" />
        <div style={{ color: '#79747E' }}>SNS계정으로 회원가입하기</div>
        <img src="/icons/Vector2499.svg" />
      </div>
      <div className={SNSBtnBox}>
        <button
          onClick={() => handleSocialLogin('google')}
          className={socialBtn}
        >
          <Image
            src="/icons/logo_google.svg"
            alt="구글 로고"
            width={72}
            height={72}
            priority
          />
        </button>
        <button
          onClick={() => handleSocialLogin('kakao')}
          className={socialBtn}
        >
          <Image
            src="/icons/logo_kakao.svg"
            alt="카카오 로고"
            width={72}
            height={72}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
