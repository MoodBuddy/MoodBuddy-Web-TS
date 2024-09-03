import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Dropdown from './Dropdown';
import MonthlyCount from './MonthlyCount';
import { getDiaryNums } from '../../../apis/user';
import { useState } from 'react';

const DiaryCount = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const formattedDate = format(new Date(selectedYear, 0, 1), 'yyyy-MM-dd');

  const {
    data: diaryNums,
    isError,
    error,
  } = useQuery({
    queryKey: ['emotion', formattedDate],
    queryFn: () => getDiaryNums(formattedDate),
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-[469px] h-[679px] bg-[#F7F3EF] rounded-[30px] border-[3px] border-black">
      <div className="flex flex-col">
        <div className="font-semiBold text-[20px] text-[#868686] ml-[35px] mt-[26px]">
          현재까지 작성한 일기 횟수
        </div>
        <div className="flex gap-[23px] mt-[60px] ml-[35px]">
          <Dropdown
            initState={selectedYear.toString()}
            onChangeState={(value) => setSelectedYear(parseInt(value))}
          />
          <div className="flex flex-col gap-[30px] h-[493px] overflow-y-auto custom-scrollbar ">
            {diaryNums.map((items) => (
              <MonthlyCount
                key={items.month}
                month={items.month}
                count={items.nums}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiaryCount;
