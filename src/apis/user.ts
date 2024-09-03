import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res.data;
};

export const getUserInfo = async () => {
  try {
    const data = await get('/api/v1/member/main');
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getDiaryNums = async (year) => {
  try {
    const data = await get(`/api/v1/member/main/diary-nums?year=${year}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getEmotionNums = async () => {
  try {
    const data = await get(`/api/v1/member/main/emotion-nums`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getProfile = async () => {
  try {
    const data = await get(`/api/v1/member/main/profile`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getquddyTI = async () => {
  try {
    const data = await get(`/api/v1/member/quddyTI/findAll`);
    return data.data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postProfileEdit = async (formData) => {
  try {
    const data = await client.post(
      '/api/v1/member/main/profile-edit',
      formData,
    );

    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postShortWordToNextMonth = async (comment) => {
  try {
    const data = await post('/api/v1/member/main/month-comment', comment);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
export const updateShortWordToNextMonth = async (comment) => {
  try {
    const data = await post(
      '/api/v1/member/main/month-comment-update',
      comment,
    );
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const checkTodayDiary = async () => {
  try {
    const data = await get('/api/v1/member/checkTodayDiary');
    return data.data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getMonthStatic = async (date) => {
  try {
    const data = await get(`/api/v1/member/main/month-static?month=${date}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const postFcmToken = async (token) => {
  try {
    const data = await post('/api/v1/member/main/fcmToken', {
      fcmToken: token,
    });
    return data;
  } catch (error) {
    throw new Error('토큰 전송에 실패하였습니다.');
  }
};

export const getKakaoLogin = async (code) => {
  try {
    const { token } = JSON.parse(sessionStorage.getItem('session'));
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    };
    const data = await get(
      `/api/v1/user/login/oauth2/code/kakao?code=${code}`,
      { headers },
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
