import { useEffect } from 'react';
import { format } from 'date-fns';
import useCalendarStore from '../../../store/calendarStore';
import nextBorderIcon from '../../../../public/icon/nextBorderIcon.svg';
import prevBorderIcon from '../../../../public/icon/prevBorderIcon.svg';

const CalendarHeader = () => {
  const { currentDate, handlePrevMonth, handleNextMonth, fetchDiaryList } =
    useCalendarStore();

  useEffect(() => {
    fetchDiaryList();
  }, [fetchDiaryList]);

  const month = format(currentDate, 'MMM');

  return (
    <div className="ml-5">
      <div className="flex items-center gap-4 text-lg">
        <button onClick={handlePrevMonth}>
          <img src={prevBorderIcon} alt="prevBorderIcon" />
        </button>
        <h1 className="font-meetme text-8xl mx-4">{month}</h1>
        <button onClick={handleNextMonth}>
          <img src={nextBorderIcon} alt="nextBorderIcon" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
