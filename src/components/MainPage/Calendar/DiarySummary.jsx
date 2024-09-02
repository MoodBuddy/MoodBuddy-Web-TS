import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCalendarStore from '../../../store/calendarStore';
import { postSummary } from '../../../apis/main';

const DiarySummary = () => {
  const { selectedDate } = useCalendarStore();
  const [diarySummary, setDiarySummary] = useState({
    diaryTitle: '제목',
    diarySummary: '일기 한 줄 요약',
    diaryId: null,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      if (!selectedDate) return;
      try {
        const data = await postSummary({ calendarDay: selectedDate });
        setDiarySummary(data);
      } catch (error) {
        console.error('Failed to fetch diary summary:', error.message);
      }
    };
    fetchSummary();
  }, [selectedDate]);

  const id = diarySummary.diaryId;
  const title = diarySummary.diaryTitle;
  const summary = diarySummary.diarySummary;

  return (
    <div className="w-[1000px] h-[220px] border rounded-[36px] bg-white px-12 py-4 relative">
      <div className="absolute top-4 right-4">
        {id ? (
          <Link
            to={`/diary/${id}`}
            className="text-base font-thin text-[#919191] p-3 mr-10"
          >
            자세히 보기
          </Link>
        ) : (
          <Link
            to="/writing"
            className="text-base font-thin text-[#919191] p-3 mr-10"
          >
            기록하러가기
          </Link>
        )}
      </div>
      {id ? (
        <>
          <h1 className="font-bold mt-6 mb-8 whitespace-pre-wrap text-2xl">
            {title}
          </h1>
          <p className="font-medium whitespace-pre-wrap text-2xl">{summary}</p>
        </>
      ) : (
        <>
          <p className="font-medium my-[70px]">일기를 작성하지 않았습니다.</p>
        </>
      )}
    </div>
  );
};

export default DiarySummary;
