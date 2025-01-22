'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NicknameInput: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  // TODO: 해당 메소드 맞는지 확인 필요
  const router = useRouter();

  const getKakaoCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    return code
  }

  const handleKakaoSignUp = async () => {
    const code = getKakaoCode();

    if (!nickname || !code) {
      setIsAvailable(null);
      return;
    }

    try {
      const response = await fetch(
        `https://sp-globalnomad-api.vercel.app/10-1/oauth/sign-up/kakao`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname, // 닉네임
            redirectUri: 'http://localhost:3000/nickname',
            token: code,
          }),
        }
      );

      const responseData = await response.json()
      console.log(responseData);
      if(response.ok) router.push('/')
    } catch (error) {
      console.error('Error checking nickname:', error);
      setErrorMessage('서버 오류가 발생했습니다.');
      setIsAvailable(null);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleKakaoSignUp();  
  };

  return (
    <div>
      <h1>닉네임 입력</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="닉네임을 입력하세요"
        />
        {isAvailable !== null && (
          <div>
            {isAvailable ? (
              <span style={{ color: 'green' }}>사용 가능한 닉네임입니다.</span>
            ) : (
              <span style={{ color: 'red' }}>이미 사용 중인 닉네임입니다.</span>
            )}
          </div>
        )}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" disabled={isAvailable === false}>
          제출
        </button>
      </form>
    </div>
  );
};

export default NicknameInput;
