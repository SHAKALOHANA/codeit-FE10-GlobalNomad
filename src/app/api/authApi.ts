import { AxiosError } from 'axios';
import { instance } from './instance';

interface PostRefreshParams {
  refreshToken: string;
}

interface PostRefreshRes {
  accessToken: string;
  refreshToken: string;
}

//리액트 쿼리 사용 시 참고
export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const response = await instance.post<PostRefreshRes>(
    '/auth/tokens',
    undefined,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  return response.data;
};

// 로그인 요청 인터페이스
interface PostLogInParams {
  email: string;
  password: string;
}

// 회원가입 요청 인터페이스
interface PostSignUpParams {
  email: string;
  nickname: string;
  password: string;
}

// 로그인 응답 인터페이스
interface PostLogInRes {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
    updatedAt: string;
    createdAt: string;
  };
}

// 회원가입 응답 인터페이스
interface PostSignUpRes {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

// 로그인 응답 인터페이스
export const postLogIn = async ({
  email,
  password,
}: PostLogInParams): Promise<PostLogInRes> => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>('/auth/login', bodyObj);
  return response.data;
};

// 회원가입 응답 인터페이스
export const postSignUp = async ({
  email,
  nickname,
  password,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password };

  try {
    const response = await instance.post<PostSignUpRes>('/users', bodyObj);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    // 409 에러 처리 추가
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 409) {
      throw new Error('이미 사용중인 이메일입니다.'); // 사용자 정의 에러 메시지
    }
    throw error; // 다른 에러는 그대로 던짐
  }
};
