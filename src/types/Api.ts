import { Pagination } from "./Page";

type ResponseStatus = "SUCCESS" | "ERROR" | "FAIL";

type ResponseCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

// 기본 응답 타입
export type BaseResponse<T> = {
  code: ResponseCode;
  message?: string[];
  status: ResponseStatus;
  data: T;
};

// 페이지네이션 응답 타입
export type PaginationResponse<T> = BaseResponse<Pagination<T>>;
