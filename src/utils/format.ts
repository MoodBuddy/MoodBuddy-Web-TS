import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { quddies } from '../constants/QuddyList';
import clear from '../../public/icon/sunIcon.svg';
import cloudy from '../../public/icon/cloudIcon.svg';
import rain from '../../public/icon/rainIcon.svg';
import snow from '../../public/icon/snowIcon.svg';

// 날씨에 따라 아이콘 반환
export const formatWeather = (weather) => {
  switch (weather) {
    case 'CLEAR':
      return clear;
    case 'CLOUDY':
      return cloudy;
    case 'RAIN':
      return rain;
    case 'SNOW':
      return snow;
    default:
      return '알 수 없음';
  }
};

// 감정에 따라 적절한 쿼디 이미지와 텍스트 반환
export const formatQuddyByEmotion = (emotion) => {
  const quddy = quddies.find((q) => q.emotion === emotion);
  return quddy
    ? quddy
    : { imgSrc: null, bubbleSrc: null, text: '', name: '', color: '' };
};

// 날짜 포맷 ex) 2024.07.09(화)
export const formatDate = (date) => {
  const targetDate = date ? new Date(date) : new Date();
  return format(targetDate, 'yyyy. MM. dd (E)', {
    locale: ko,
  });
};
