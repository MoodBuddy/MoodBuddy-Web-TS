import client from "./client";

export const get = async <T>(url: string): Promise<T> => {
  try {
    const res = await client.get(url);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
  
export const post = async <T>(url: string, data?: any): Promise<T> => {
  try {
    const res = await client.post(url, data);
    return res.data;
  } catch (error) {
    throw new Error("데이터 전송에 실패하였습니다.");
  }
};
