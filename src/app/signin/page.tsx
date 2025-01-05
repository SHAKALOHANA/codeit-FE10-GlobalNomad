'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postLogIn } from '../../../apis/authApi';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import {
  container,
  card,
  logo,
  label,
  inputField,
  errorMessage,
  errorVisible,
  signinBox,
  signinBtn,
  signupArea,
  text,
  linkButton,
} from '../signin/SignIn.css';

interface ApiError {
  message: string;
}

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('이메일은 필수 입력입니다.');
    } else if (!validateEmail(email)) {
      setEmailError('이메일 형식으로 작성해 주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError('비밀번호는 필수 입력입니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = async () => {
    handleEmailBlur();
    handlePasswordBlur();

    if (!email || !validateEmail(email) || !password) {
      return;
    }
    // 로그인 API 호출
    try {
      const data = await postLogIn({ email, password });

      localStorage.setItem('accessToken', data.accessToken); // accessToken 저장
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('email', data.user.email);
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios 에러인 경우
        const apiError = error.response?.data as ApiError; // 서버에서 반환한 에러 메시지
        setLoginError(apiError?.message);
      } else {
        // Axios 에러가 아닌 경우 (예: 네트워크 오류)
        setLoginError('로그인 중 오류가 발생했습니다.');
      }
      setEmailError('이메일 혹은 비밀번호를 확인해주세요.');
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className={container}>
      <div className={card}>
        <div className={logo}>
          <Image
            src="/icons/logoGroup.svg"
            alt="로고"
            width={340}
            height={180}
            priority
          />
        </div>
        <div>
          <label className={label}>이메일</label>
          <input
            type="text"
            placeholder="이메일 입력"
            className={inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            onKeyPress={handleKeyPress}
          />
          {emailError && (
            <p className={`${errorMessage} ${emailError ? errorVisible : ''}`}>
              {emailError}
            </p>
          )}
        </div>
        <div>
          <label className={label}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            className={inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            onKeyPress={handleKeyPress}
          />
          {passwordError && (
            <p className={`${errorMessage} ${emailError ? errorVisible : ''}`}>
              {passwordError}
            </p>
          )}
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
        <div className={signinBox}>
          <button onClick={handleLogin} className={signinBtn}>
            로그인 하기
          </button>
        </div>
        <div className={signupArea}>
          <p className={text}>회원이 아니신가요?</p>
          <div>
            <Link href="/signup" className={linkButton}>
              회원가입하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
