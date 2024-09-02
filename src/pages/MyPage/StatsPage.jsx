import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { getMonthStatic } from '../../apis/user';
import QuddyTiSection from '../../components/MyPage/Statistics/QuddyTiSection';
import styles from '@styles/check.module.css';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import StatsTopBar from '../../components/MyPage/Statistics/StatsTopBar';
import useCalendarStore from '../../store/calendarStore';
import RankSection from '../../components/MyPage/Statistics/RankSection';
import MyCalendarSection from '../../components/MyPage/Statistics/MyCalendarSection';
import MemoSection from '../../components/MyPage/Statistics/MemoSection';

const StatsPage = () => {
  const [shortWord, setShortWord] = useState('');
  const {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    daysInMonth,
    fetchDiaryList,
  } = useCalendarStore();
  const formattedDate = format(currentDate, 'yyyy-MM-dd');

  const {
    isError,
    data: emotion,
    error,
  } = useQuery({
    queryKey: ['emotion', formattedDate],
    queryFn: () => getMonthStatic(formattedDate),
  });

  useEffect(() => {
    fetchDiaryList();
  }, [currentDate, fetchDiaryList]);

  if (isError) {
    console.error('Error fetching letter:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  return (
    <div>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="w-[1080px] ml-44 mt-10 gap-2 mr-40">
          <h1 className="text-4xl font-extrabold mb-2">월별 통계 보기</h1>
          <p className="text-xl font-light">
            월별로 내가 쓴 일기에 대한 통계를 볼 수 있어요.
          </p>
        </div>
        <div className="bg-[#F7F3EF] w-[1080px] rounded-[36px] my-10">
          <StatsTopBar
            currentDate={currentDate}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
          />
          <QuddyTiSection />

          <div className="flex">
            <RankSection currentDate={currentDate} emotionData={emotion.emotionStaticDtoList} />
            <MyCalendarSection
              currentDate={currentDate}
              daysInMonth={daysInMonth}
              shortWord={shortWord}
            />
          </div>

          <MemoSection
            setShortWord={setShortWord}
            shortWord={shortWord}
            currentDate={currentDate}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StatsPage;
