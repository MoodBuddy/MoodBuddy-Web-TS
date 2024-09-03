import { format, startOfMonth, getDay, startOfWeek, addDays } from 'date-fns';
import useCalendarStore from '../../../store/calendarStore';
import {
  getDiaryEmotion,
  getEmotionImage,
  getDiaryId,
} from '../../../utils/calendar';
import { useNavigate } from 'react-router-dom';

const MyCalendarSection = ({ currentDate, daysInMonth, shortWord }) => {
  const navigate = useNavigate();
  const { diaryList } = useCalendarStore();
  const days = daysInMonth(currentDate).filter(
    (date) => format(currentDate, 'MM') === date.month,
  ); // 현재 달의 날짜만 필터링

  // 현재 월의 첫 번째 날의 요일
  const firstDayIndex = getDay(startOfMonth(currentDate));
  const emptyDays = Array(firstDayIndex).fill(null);
  const calendarDays = [...emptyDays, ...days];

  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
  const weeks = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startDate, index), 'eee'),
  );

  const handleDayClick = (date) => {
    const diaryId = getDiaryId(diaryList, date.date);
    if (diaryId) {
      navigate(`/diary/${diaryId}`);
    }
  };

  return (
    <div className="h-full flex-col ">
      <div className="relative bottom-2 flex justify-center items-center mx-auto font-meetme text-[20px] w-[450px] h-16 overflow-hidden whitespace-pre-wrap text-center leading-6">
        {`${shortWord ? shortWord : ''}`}
      </div>

      <div className="relative p-6 mb-24 h-full rounded-[28px] border border-black">
        {/* month 출력 */}
        <div className="flex justify-center mb-6">
          <h1 className="text-xl font-semibold">
            {format(currentDate, 'M')}월 감정 캘린더
          </h1>
        </div>

        {/* weeks 출력 */}
        <div className="grid grid-cols-7 mb-10">
          {weeks.map((week, index) => (
            <div
              key={week}
              className="flex justify-center my-2 text-xl text-[#C79A76]"
            >
              {week}
            </div>
          ))}
        </div>

        {/* days 출력 */}
        {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
          (_, rowIndex) => (
            <div className="table-row" key={rowIndex}>
              {calendarDays
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((date, colIndex) => (
                  <div
                    key={date ? date.date : `empty-${rowIndex}-${colIndex}`}
                    className="table-cell"
                  >
                    <div
                      onClick={() => date && handleDayClick(date)}
                      className="flex justify-center items-center w-[34px] h-[34px] mx-5 my-1 cursor-pointer"
                    >
                      {date ? (
                        <span className="text-xl">{date.day}</span>
                      ) : (
                        <span className="text-xl"></span>
                      )}
                    </div>

                    {/* 감정에 맞는 쿼디 출력, 없을 경우 빈칸 표시 */}
                    <div className="flex justify-center">
                      {date && getDiaryEmotion(diaryList, date.date) ? (
                        <img
                          onClick={() => date && handleDayClick(date)}
                          src={getEmotionImage(
                            getDiaryEmotion(diaryList, date.date),
                          )}
                          alt={getDiaryEmotion(diaryList, date.date)}
                          className="w-[50px] mb-3 cursor-pointer"
                        />
                      ) : (
                        <div className="w-[50px] mb-16"></div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default MyCalendarSection;
