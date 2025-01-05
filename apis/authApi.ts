import { instance } from './instance';

interface PostRefreshParams {
  refreshToken: string;
}

interface PostRefreshRes {
  accessToken: string;
}

//리액트 쿼리 사용 시 참고
export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const bodyObj = { refreshToken };

  const response = await instance.post<PostRefreshRes>(
    'auth/tokens',
    bodyObj,
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
export const postLogIn = async ({ email, password }: PostLogInParams): Promise<PostLogInRes> => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>('auth/login', bodyObj);
  return response.data;
};

// 회원가입 응답 인터페이스
export const postSignUp = async ({
  email,
  nickname,
  password,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password };

  const response = await instance.post<PostSignUpRes>('users', bodyObj);
  return response.data;
};
