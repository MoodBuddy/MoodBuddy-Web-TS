import client from './client';
import qs from 'qs';

const get = async (url, params) => {
  const res = await client.get(url, { params });
  return res.data.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const saveDiary = async (formData) => {
  try {
    const response = await client.post('/api/v1/member/diary/save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('일기 저장 오류:', error);
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const SaveDraftDiary = async (formData) => {
  try {
    const response = await client.post(
      '/api/v1/member/diary/draftSave',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('일기 저장 오류:', error);
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getFindDraftAll = async () => {
  try {
    const data = await get('/api/v1/member/diary/draftFindAll');
    const draftList = data.diaryResDraftFindOneList;
    const draftLength = data.diaryResDraftFindOneList.length;
    console.log(data.diaryResDraftFindOneList.length);
    return { draftList, draftLength };
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const deleteDraft = async (deleteDraftList) => {
  try {
    const data = await client.delete('/api/v1/member/diary/draftSelectDelete', {
      data: { diaryIdList: deleteDraftList },
    });
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const updateDiaryOne = async (formData) => {
  try {
    const data = await client.post('/api/v1/member/diary/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.error('일기 수정 오류:', error);
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const diaryDescription = async () => {
  try {
    const data = await client.post('/api/v1/member/diary/description');
    return data;
  } catch (error) {
    console.error('일기 수정 오류:', error);
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getFindOne = async (diaryId) => {
  try {
    const data = await get(`/api/v1/member/diary/findOne/${diaryId}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

// Pageable Object 수정해야함
export const getFindAll = async () => {
  try {
    const data = await get(
      `/api/v1/member/diary/findAllPageable?page=0&size=100`,
    );
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getFindAllByEmotion = async ({ emotion }) => {
  try {
    const url = `/api/v1/member/diary/findAllByEmotionWithPageable?diaryEmotion=${emotion}&page=0&size=100&sort=string`;
    const data = await get(url);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getFindAllByFilter = async (searchParams) => {
  try {
    const url = `/api/v1/member/diary/findAllByFilter`;
    const params = {
      keyWord: encodeURIComponent(searchParams.keyword),
      page: 0,
      size: 20,
      sort: 'string',
      year: searchParams.year,
      month: searchParams.month,
      diarySubject: searchParams.topic,
      diaryEmotion: searchParams.diaryEmotion,
    };

    // qs 라이브러리를 사용하여 params 객체를 쿼리 문자열로 변환
    const queryString = qs.stringify(params, { encode: false });

    const data = await get(`${url}?${queryString}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const deleteDiary = async (diaryId) => {
  try {
    const response = await client.delete(
      `/api/v1/member/diary/delete/${diaryId}`,
    );
    console.log('일기 삭제 성공:', response);
    return response;
  } catch (error) {
    console.error('일기 삭제 오류:', error);
    throw new Error('일기 삭제에 실패하였습니다.');
  }
};
