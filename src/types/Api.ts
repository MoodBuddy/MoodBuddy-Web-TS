type ResponseStatus = "SUCCESS" | "ERROR" | "FAIL";

type ResponseCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export type BaseResponse<T> = {
  code: ResponseCode;
  message?: string[];
  status: ResponseStatus;
  data: T;
  accessToken: string;
  refreshToken: string;
};
