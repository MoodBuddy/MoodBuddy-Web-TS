import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getLetter = async () => {
  try {
    const data = await get(`/api/v1/member/letter`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getLetterDetails = async (letterId) => {
  try {
    const data = await get(`/api/v1/member/letter/details/${letterId}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postLetter = async (letterData) => {
  try {
    const data = await post(`/api/v1/member/letter/write`, letterData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postAlarm = async (alarm) => {
  try {
    const data = await post(`/api/v1/member/letter/alarm`, alarm);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
