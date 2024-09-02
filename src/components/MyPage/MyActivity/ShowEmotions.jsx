import { useQuery } from '@tanstack/react-query';
import { getEmotionNums } from '../../../apis/user';
import { quddies } from '../../../constants/QuddyList';

const ShowEmotions = () => {
  const { data, isError, error } = useQuery({
    queryKey: ['emotion'],
    queryFn: () => getEmotionNums(),
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const updatedQuddies = quddies.map((item) => {
    const found = data.find((emotion) => emotion.diaryEmotion === item.emotion);
    return found ? { ...item, value: found.nums } : item;
  });

  const firstRowItems = updatedQuddies.slice(0, 3);
  const secondRowItems = updatedQuddies.slice(3);

  return (
    <div className="w-[687px] h-[679px] bg-[#F7F3EF] rounded-[30px] border-[3px] border-black">
      <div className="font-semiBold text-[20px] text-[#868686] ml-[35px] mt-[26px]">
        현재까지 감정보기
      </div>
      <div className="flex flex-col gap-[15px] items-center mt-[52px]">
        <div className="flex justify-center items-center gap-[13px]">
          {firstRowItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[5px] justify-center items-center"
            >
              <img
                className="w-[134px] h-[142px]"
                src={item.imgSrc}
                alt={item.name}
              />
              <div
                className="text-[25px] font-meetme"
                style={{ color: item.color }}
              >
                {item.name}
              </div>
              <div className="flex items-center gap-[5px]">
                <span className="text-[35px]">{item.value}</span>
                <span className="text-[23px]">회</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-[13px]">
          {secondRowItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[5px] justify-center items-center"
            >
              <img
                className="w-[134px] h-[142px]"
                src={item.imgSrc}
                alt={item.name}
              />
              <div
                className="text-[25px] font-meetme"
                style={{ color: item.color }}
              >
                {item.name}
              </div>
              <div className="flex items-center gap-[5px]">
                <span className="text-[35px]">{item.value}</span>
                <span className="text-[23px]">회</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowEmotions;
