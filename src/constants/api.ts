export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
export const SERVER_BASE_URL: string = import.meta.env.VITE_SERVER_BASE_URL;

export const END_POINT = {
  // 유저 정보 관련 엔드포인트
  USER: {
    POST_LOGIN: `/api/v1/member/test/login`, // 자체 로그인
    POST_SUMMARY: `/api/v1/member/main/summary`, // 일기 한 줄 요약
    POST_PROFILE_EDIT: `/api/v1/member/main/profile-edit`, // 프로필 수정
    POST_MONTH: `/api/v1/member/main/month`, // 캘린더 달 이동
    POST_MONTH_COMMENT: `/api/v1/member/main/month-comment`, // 다음 달 나에게 짧은 한 마디
    POST_MONTH_COMMENT_UPDATE: `/api/v1/member/main/month-comment-update`, // 다음 달 나에게 짧은 한 마디 수정
    GET_MAIN: `/api/v1/member/main`, // 메인 화면
    GET_PROFILE: `/api/v1/member/main/profile`, // 프로필 조회
    GET_MONTH_STATIC: (date: string) =>
      `/api/v1/member/main/month-static=${date}`, // 월별 통계 보기
    GET_EMOTION_NUMS: `/api/v1/member/main/emotion-nums`, // 감정 횟수 조회
    GET_DIARY_NUMS: (year: string) =>
      `/api/v1/member/main/diary-nums?year=${year}`, // 현재까지 작성한 일기 횟수
    CHECK_TODAY_DIARY: `/api/v1/member/checkTodayDiary`, // 오늘 일기 작성 가능 여부 확인
  },

  // 다이어리 관련 엔드포인트 (Diary)
  DIARY: {
    POST_UPDATE: `/api/v1/member/diary/update`, // 일기 수정
    POST_SAVE: `/api/v1/member/diary/save`, // 일기 작성
    POST_DRAFT_SAVE: `/api/v1/member/diary/draftSave`, // 일기 임시 저장
    POST_DESCRIPTION: `/api/v1/member/diary/description`, // 일기 감정 분석
    GET_FIND_ONE: (diaryId: number) =>
      `/api/v1/member/diary/findOne/${diaryId}`, // 일기 하나 조회
    GET_FIND_ALL: `/api/v1/member/diary/findAllPageable?page=0&size=100`, // 일기 전체 조회
    GET_FIND_ALL_BY_FILTER: `/api/v1/member/diary/findAllByFilter`, // 일기 필터링으로 전체 조회
    GET_FIND_ALL_BY_EMOTION: (emotion: string) =>
      `/api/v1/member/diary/findAllByEmotionWithPageable?diaryEmotion=${emotion}&page=0&size=100&sort=string`, // 일기 감정으로 전체 조회
    GET_DRAFT_ALL: `/api/v1/member/diary/draftFindAll`, // 임시 저장 일기 목록 조회
    DELETE_DRAFT: `/api/v1/member/diary/draftSelectDelete`, // 임시 저장 일기 선택 삭제
    DELETE_DIARY: (diaryId: number) => `/api/v1/member/diary/delete/${diaryId}`, // 일기 삭제
  },

  // 편지 관련 엔드포인트 (letter-controller)
  LETTER: {
    POST_LETTER: `/api/v1/member/letter/write`, // 고민상담소 편지 등록
    POST_ALARM: `/api/v1/member/letter/alarm`, // 고민상담소 알람 설정
    GET_LETTER: `/api/v1/member/letter`, // 고민상담소 첫 페이지
    GET_LETTER_DETAILS: (letterId: number) =>
      `/api/v1/member/letter/details/${letterId}`, // 고민상담소 편지 내용
  },

  // 북마크 관련 엔드포인트 (BookMark)
  BOOKMARK: {
    POST_TOGGLE: (diaryId: number) =>
      `/api/v1/member/bookMark/toggle/${diaryId}`, // 북마크 토글
    GET_ALL: `/api/v1/member/bookMark/findAll?page=0&size=20`, // 북마크 전체 조회
  },

  // 쿼디티아이 관련 엔드포인트 (QuddyTI)
  QUDDY_TI: {
    GET_ALL: `/api/v1/member/quddyTI/findAll`, // 쿼디티아이 조회
  },
};
