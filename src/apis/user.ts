import { get, post } from "./apiUtils";

export const getUserInfo = async () => {
  try {
    const data = await get("/api/v1/member/main");
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getProfile = async () => {
  try {
    const data = await get(`/api/v1/member/main/profile`);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// Post profile edit
export const postProfileEdit = async (formData) => {
  try {
    const data = await post("/api/v1/member/main/profile-edit", formData);
    return data;
  } catch (error) {
    throw new Error("데이터 전송에 실패하였습니다.");
  }
};

// firebase fcm-token (알림설정) api
// export const postFcmToken = async (token) => {
//   try {
//     const data = await post("/api/v1/member/main/fcmToken", {
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
//       `/api/v1/user/login/oauth2/code/kakao?code=${code}`,
//       { headers }
//     );
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error("데이터 불러오기에 실패하였습니다.");
//   }
// };
