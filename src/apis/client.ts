import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import dayjs from "dayjs";
import {
  getAccessToken,
  getRefreshToken,
  parseJwtPayload,
  removeTokens,
} from "./utils";
import { API_BASE_URL } from "@constants/api";

const client = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// 응답 인터셉터 설정
client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error.response); // 에러 발생시 에러 응답 반환
  }
);

// 요청 인터셉터 설정
client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const token = getAccessToken();
    const refreshToken = getRefreshToken();

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }

    if (token) {
      const payload = parseJwtPayload(token);
      const expirationTime = dayjs.unix(payload.exp);
      const currentTime = dayjs();
      const diffMinutes = expirationTime.diff(currentTime, "minute");

      if (diffMinutes <= 0) {
        // 액세스 토큰 만료
        if (refreshToken) {
          const refreshPayload = parseJwtPayload(refreshToken);
          const refreshExpirationTime = dayjs.unix(refreshPayload.exp);
          const refreshDiffMinutes = refreshExpirationTime.diff(
            currentTime,
            "minute"
          );

          if (refreshDiffMinutes <= 0) {
            // 리프레시 토큰도 만료됨
            removeTokens();
            window.location.href = "/";
            return Promise.reject(new Error("Tokens expired"));
          }
          // 해당 부분에 토큰 갱신 로직 추가
        } else {
          // 리프레시 토큰 없음
          removeTokens();
          window.location.href = "/";
          return Promise.reject(new Error("Session expired"));
        }
      }

      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return config;
});

export default client;
