import { instance } from './instance';

interface PostRefreshParams {
  refreshToken: string;
}

interface PostRefreshRes {
  accessToken: string;
}

//리액트 쿼리 사용 시 참고
<<<<<<< HEAD
=======

>>>>>>> f40d4373ff30a5fc39821fd0ce01d5d2ab82ff92
export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const bodyObj = { refreshToken };

  const response = await instance.post<PostRefreshRes>(
    'auth/tokens',
    bodyObj,
  );
  return response.data;
<<<<<<< HEAD
};
=======
}; 

>>>>>>> f40d4373ff30a5fc39821fd0ce01d5d2ab82ff92

interface PostSignUpParams {
  email: string;
  nickname: string;
  password: string;
}

interface PostSignUpRes {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    teamId: string;
    updatedAt: string;
    createdAt: string;
    image: string | null;
  };
}

export const postSignUp = async ({
  email,
  nickname,
  password,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password };

  const response = await instance.post<PostSignUpRes>('auth/signUp', bodyObj);
  return response.data;
};

interface PostLogInParams {
  email: string;
  password: string;
}

type PostLogInRes = PostSignUpRes;

export const postLogIn = async ({ email, password }: PostLogInParams) => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>('auth/signIn', bodyObj);
  return response.data;
};