import axios, { AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import dayjs from 'dayjs';
import { parseJwtPayload } from './utils';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true,
});

// 응답 인터셉터 설정
client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error.response);  // 에러 발생시 에러 응답 반환
  },
);

// 요청 인터셉터 설정
client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const sessionData = sessionStorage.getItem('session');
    const session = sessionData ? JSON.parse(sessionData) : null;
    const token = session?.token;

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }
    
    if (token) {
      const payload = parseJwtPayload(token);
      const expirationTime = dayjs.unix(payload.exp);
      const currentTime = dayjs();
      const diffMinutes = expirationTime.diff(currentTime, 'minute');

      if (diffMinutes <= 0) {
        const iData = localStorage.getItem('i');
        const i = iData ? JSON.parse(iData) : null;

        if (i) {
          const iPayload = parseJwtPayload(i);
          const iExpirationTime = dayjs.unix(iPayload.exp);
          const iDiffMinutes = iExpirationTime.diff(currentTime, 'minute');

          if (iDiffMinutes <= 0) {
            localStorage.removeItem('i');
            window.location.href = '/';
            return Promise.reject(new Error('Refresh token expired'));
          }
        }

        sessionStorage.removeItem('session');
        window.location.href = '/';
        return Promise.reject(new Error('Session token expired'));
      }

      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    return Promise.reject(e);
  }

  return config;
});

export default client;
