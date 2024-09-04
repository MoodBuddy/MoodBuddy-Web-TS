import { post } from "./apiUtils";

export const postShortWordToNextMonth = async (comment) => {
  try {
    const data = await post("/api/v1/member/main/month-comment", comment);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const updateShortWordToNextMonth = async (comment) => {
  try {
    const data = await post(
      "/api/v1/member/main/month-comment-update",
      comment
    );
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
