import { get, post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { Profile, User } from "@type/User";

// 유저 정보 가져오기
export const getUserInfo = async (): Promise<User> => {
  try {
    const res = await get<User>(END_POINT.USER.GET_MAIN);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 프로필 정보 가져오기
export const getProfile = async (): Promise<Profile> => {
  try {
    const res = await get<Profile>(END_POINT.USER.GET_PROFILE);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 프로필 수정
export const postProfileEdit = async (
  formData: Profile
): Promise<Profile> => {
  try {
    const res = await post<Profile>(END_POINT.USER.POST_PROFILE_EDIT, formData);
    return res.data;
  } catch (error) {
    throw new Error("데이터 전송에 실패하였습니다.");
  }
};

// firebase fcm-token (알림설정) api
// export const postFcmToken = async (token) => {
//   try {
//     const data = await post("/api/v2/member/main/fcmToken", {
//       fcmToken: token,
//     });
//     return data;
//   } catch (error) {
//     throw new Error("토큰 전송에 실패하였습니다.");
//   }
// };

// 카카오 소셜로그인 api
// export const getKakaoLogin = async (code) => {
//   try {
//     const { token } = JSON.parse(sessionStorage.getItem("session"));
//     const headers = {
//       "Content-Type": "application/json;charset=utf-8",
//       "Access-Control-Allow-Origin": "*",
//       Authorization: `Bearer ${token}`,
//     };
//     const data = await get(
//       `/api/v2/user/login/oauth2/code/kakao?code=${code}`,
//       { headers }
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error("데이터 불러오기에 실패하였습니다.");
//   }
// };
