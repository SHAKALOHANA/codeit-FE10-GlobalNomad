'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NicknameInput: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState<string | null>(null); // 토큰 상태 추가
  const router = useRouter();

  // URL에서 인가 코드 가져오기 및 토큰 요청
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchKakaoAccessToken(code); // 인가 코드로 토큰 요청
    } else {
      console.error('인가 코드가 없습니다.');
    }
  }, []);

  const fetchKakaoAccessToken = async (code: string) => {
    const response = await fetch(`/api/auth/kakao?code=${code}`);
    const data = await response.json();
    console.log(response);
    if (response.ok) {
      console.log('토큰 데이터:', data);
      setToken(data.access_token); // 받은 토큰을 상태에 저장
    } else {
      console.error('토큰 요청 실패:', data.message);
    }
  };

  const checkNicknameAvailability = async () => {
    console.log(nickname, token);
    if (!nickname || !token) {
      // 토큰이 없으면 체크하지 않음
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
            nickname: nickname, // 닉네임
            redirectUri: 'http://localhost:3000/nickname',
            token: token,
          }),
        }
      );
      const responseData = await response.text(); // 응답을 텍스트로 읽기

      if (response.ok) {
        const data = JSON.parse(responseData);
        console.log('data is:', data);
        setIsAvailable(data.available);
        return data.available;
      } else {
        console.log('Server error response:', responseData);

        let errorData;
        try {
          errorData = JSON.parse(responseData); // JSON 파싱
        } catch (err) {
          console.error('Error parsing JSON response:', err); // JSON 파싱 에러
          errorData = { message: '응답을 처리하는 중 오류가 발생했습니다.' }; // 기본 오류 메시지
        }
        console.log('Server error response:', errorData);
        if (response.status === 400) {
          setErrorMessage('잘못된 인가 코드입니다.');
        } else if (response.status === 409) {
          setErrorMessage(
            '닉네임이 이미 사용 중입니다. 다른 닉네임을 입력하세요.'
          );
          setIsAvailable(false);
        } else {
          setErrorMessage(
            errorData.message || '닉네임 중복 확인에 실패했습니다.'
          );
        }
        // 사용 가능 여부를 null로 설정
        setIsAvailable(null);
        return false;
      }
    } catch (error) {
      console.error('Error checking nickname:', error);
      setErrorMessage('서버 오류가 발생했습니다.');
      setIsAvailable(null);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isAvailable = await checkNicknameAvailability(); // 중복 확인 요청

    if (isAvailable) {
      // 닉네임이 사용 가능할 경우 홈으로 리디렉션
      router.push('/');
    } else {
      setErrorMessage('닉네임이 중복되었습니다. 다른 닉네임을 입력하세요.');
    }
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
