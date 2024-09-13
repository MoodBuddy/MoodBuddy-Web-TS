import { post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { BaseResponse } from "@type/Api";
import { UserAuth } from "@type/Auth";

type AuthResponse = BaseResponse<UserAuth>;

// 자체 로그인
export const postTestLogin = async (
  userAuth: UserAuth
): Promise<AuthResponse> => {
  try {
    const res = await post<UserAuth>(END_POINT.USER.POST_LOGIN, userAuth);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
