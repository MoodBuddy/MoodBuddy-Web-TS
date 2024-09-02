import { format } from 'date-fns';
import prevIcon from '../../../../public/icon/prevIcon.svg';
import nextIcon from '../../../../public/icon/nextIcon.svg';

const StatsTopBar = ({ currentDate, handlePrevMonth, handleNextMonth }) => {
  return (
    <div className="flex items-center justify-center gap-20 bg-[#C79A76] rounded-[36px] border-2 border-black py-1">
      <button onClick={handlePrevMonth} className="text-2xl font-bold w-3">
        <img src={prevIcon} alt="prevIcon" />
      </button>
      <h1 className="text-lg font-medium">
        {format(currentDate, 'yyyy년 M월')}
      </h1>
      <button onClick={handleNextMonth} className="text-2xl font-bold w-3">
        <img src={nextIcon} alt="nextIcon" />
      </button>
    </div>
  );
};

export default StatsTopBar;
