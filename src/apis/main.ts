import client from './client';

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const postCalendar = async (month) => {
  try {
    const data = await post('/api/v1/member/main/month', month);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postSummary = async (date) => {
  try {
    const data = await post('/api/v1/member/main/summary', date);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
