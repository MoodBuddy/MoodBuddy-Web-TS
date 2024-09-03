import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data.data;
};
const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getBookMarkFindAll = async () => {
  try {
    const data = await get('/api/v1/member/bookMark/findAll?page=0&size=20');
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const bookMarkToggle = async (diaryId) => {
  try {
    const data = await post(
      `/api/v1/member/bookMark/toggle/${diaryId}`,
      diaryId,
    );
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
