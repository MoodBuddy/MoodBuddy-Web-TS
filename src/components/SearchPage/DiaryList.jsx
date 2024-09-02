import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  getFindAll,
  getFindAllByEmotion,
  getFindAllByFilter,
} from '../../apis/diary';
import { getBookMarkFindAll } from '../../apis/bookMark';
import { weatherList } from '../../constants/WeatherList';
import useSearchStore from '../../store/searchStore';

const DiaryList = ({ filterType, emotion, onClose }) => {
  const { searchParams } = useSearchStore();
  const [sortOrder, setSortOrder] = useState('latest');

  //searchParams가 비어있으면 filterType을 'all'로 설정
  if (
    searchParams.keyword === '' &&
    searchParams.year == null &&
    searchParams.month == null &&
    searchParams.topic == null &&
    searchParams.diaryEmotion == null &&
    filterType !== 'bookMark'
  ) {
    filterType = 'all';
  }

  // 필터 타입에 따라 다른 API 함수 선택
  const getDiariesQuery = () => {
    switch (filterType) {
      case 'emotion':
        return getFindAllByEmotion({ emotion });
      case 'bookMark':
        return getBookMarkFindAll();
      case 'search':
        return getFindAllByFilter(searchParams);
      case 'all':
        return getFindAll();
      default:
        return getFindAll();
    }
  };

  const { isError, data, error } = useQuery({
    queryKey: ['diaries', filterType, emotion, searchParams],
    queryFn: getDiariesQuery,
  });

  if (isError) {
    return <div>오류 발생: {error.message}</div>;
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const sortedData = useMemo(() => {
    if (sortOrder === 'latest') {
      return [...data.content].sort(
        (a, b) => new Date(b.diaryDate) - new Date(a.diaryDate),
      );
    } else {
      return [...data.content].sort(
        (a, b) => new Date(a.diaryDate) - new Date(b.diaryDate),
      );
    }
  }, [data.content, sortOrder]);

  return (
    <div className="bg-[#F7F3EF] w-[1080px] rounded-[36px] p-6 my-10 ">
      {/* 시간순서 정렬 */}
      <div className="flex justify-end p-2 mr-4 text-zinc-400 sticky top-0">
        <button
          onClick={() => setSortOrder('latest')}
          className={`${
            sortOrder === 'latest' ? 'text-[#B98D6D]' : 'text-inherit'
          }`}
        >
          최신순
        </button>
        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <button
          onClick={() => setSortOrder('oldest')}
          className={`${
            sortOrder === 'oldest' ? 'text-[#B98D6D]' : 'text-inherit'
          }`}
        >
          오래된 순
        </button>
      </div>

      <div className="h-[800px] overflow-y-auto custom-scrollbar">
        {sortedData.map((item) => (
          <div key={item.diaryId}>
            <Link
              to={`/diary/${item.diaryId}`}
              onClick={onClose}
              className="flex p-4 items-center justify-between"
            >
              <div className="flex flex-col space-y-3">
                <p className="text-zinc-400 text-xl">
                  {new Date(item.diaryDate).toLocaleDateString()}
                </p>
                <h1 className="font-meetme text-3xl font-bold mb-2">
                  {item.diaryTitle}
                </h1>
                <p className="text-zinc-400 text-lg text-ellipsis w-[700px] truncate">
                  {item.diarySummary}
                </p>
              </div>

              {item.diaryImgList.length > 0 ? (
                <div className="rounded-full border overflow-hidden">
                  <img
                    src={item.diaryImgList[0]}
                    alt="Diary Image"
                    className="w-[106px] h-[106px] object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-full border border-[#B98D6C] p-5">
                  <img
                    src={weatherList[item.diaryWeather]}
                    alt={weatherList[item.diaryWeather]}
                    className="w-16 h-16"
                  />
                </div>
              )}
            </Link>
            <div className="h-[1px] my-3 w-full bg-stone-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
