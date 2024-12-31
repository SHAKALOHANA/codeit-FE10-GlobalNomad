import axios, { AxiosError } from 'axios';
import { postRefresh } from './authApi';

const BASE_URL = 'https://sp-globalnomad-api.vercel.app/10-1/auth/tokens';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(async (config) => {
  if (config.url === 'auth/tokens') return config; //요청 URL이 'auth/tokens'인 경우, 특별히 처리하지 않고 요청을 그대로 반환

  try {
    const email = localStorage.getItem('email');
    const refresh = localStorage.getItem('refreshToken');
    if (!email || !refresh)
      throw new AxiosError('저장된 유저 정보가 없습니다.', '401');
    const { accessToken } = await postRefresh({ refreshToken: refresh }); //리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청
    localStorage.setItem('accessToken', accessToken); //이 액세스 토큰을 다시 localStorage에 저장
  } catch {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('email');
  }

  const access = localStorage.getItem('accessToken');
  if (access) config.headers['Authorization'] = `Bearer ${access}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ message: string }>) => {
    const res = error.response;
    if (res)
      console.log(`[${error.status}:${res.config.url}] ${res.data.message}`);

    return Promise.reject(error);
  },
);