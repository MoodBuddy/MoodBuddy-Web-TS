import { get } from "./apiUtils";

export const getDiaryNums = async (year) => {
  try {
    const data = await get(`/api/v1/member/main/diary-nums?year=${year}`);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getEmotionNums = async () => {
  try {
    const data = await get(`/api/v1/member/main/emotion-nums`);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getquddyTI = async () => {
  try {
    const data = await get(`/api/v1/member/quddyTI/findAll`);
    return data.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const checkTodayDiary = async () => {
  try {
    const data = await get("/api/v1/member/checkTodayDiary");
    return data.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getMonthStatic = async (date) => {
  try {
    const data = await get(`/api/v1/member/main/month-static?month=${date}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
