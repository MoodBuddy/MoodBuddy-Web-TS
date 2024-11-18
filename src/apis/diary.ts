import client from "./client";

const get = async (url, params) => {
  const res = await client.get(url, { params });
  return res.data.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getFindDraftAll = async () => {
  try {
    const data = await get("/api/v1/member/diary/draftFindAll");
    const draftList = data.diaryResDraftFindOneList;
    const draftLength = data.diaryResDraftFindOneList.length;
    console.log(data.diaryResDraftFindOneList.length);
    return { draftList, draftLength };
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const saveDiary = async (formData) => {
  try {
    const response = await client.post("/api/v1/member/diary/save", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("일기 저장 오류:", error);
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const SaveDraftDiary = async (formData) => {
  try {
    const response = await client.post(
      "/api/v1/member/diary/draftSave",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("일기 저장 오류:", error);
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const deleteDraft = async (deleteDraftList) => {
  try {
    const data = await client.delete("/api/v1/member/diary/draftSelectDelete", {
      data: { diaryIdList: deleteDraftList },
    });
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const updateDiaryOne = async (formData) => {
  try {
    const data = await client.post("/api/v1/member/diary/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error("일기 수정 오류:", error);
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const deleteDiary = async (diaryId) => {
  try {
    const response = await client.delete(
      `/api/v1/member/diary/delete/${diaryId}`
    );
    console.log("일기 삭제 성공:", response);
    return response;
  } catch (error) {
    console.error("일기 삭제 오류:", error);
    throw new Error("일기 삭제에 실패하였습니다.");
  }
};

export const diaryDescription = async () => {
  try {
    const data = await client.post("/api/v1/member/diary/description");
    return data;
  } catch (error) {
    console.error("일기 수정 오류:", error);
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
