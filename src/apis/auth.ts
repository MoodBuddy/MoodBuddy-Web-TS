import { post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { AuthResponse, UserAuth } from "@type/Auth";

// 자체 로그인
export const postTestLogin = async (
  userAuth: UserAuth
): Promise<AuthResponse> => {
  try {
    const res = await post<AuthResponse>(END_POINT.USER.POST_LOGIN, userAuth);
    console.log(res);

    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
