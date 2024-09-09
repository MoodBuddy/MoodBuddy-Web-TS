import { AxiosRequestConfig, AxiosResponse } from "axios";
import client from "./client";

// GET 요청
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.get<T>(url, config);
    return response;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// POST 요청
export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.post<T>(url, data, config);
    return response;
  } catch (error) {
    throw new Error("데이터 전송에 실패하였습니다.");
  }
};
