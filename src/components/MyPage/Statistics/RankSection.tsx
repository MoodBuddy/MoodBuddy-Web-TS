import { format } from 'date-fns';
import { quddies } from '../../../constants/QuddyList';
import { getQuddyData } from '../../../utils/calendar';

const RankSection = ({ currentDate, emotionData }) => {
  // 감정 데이터를 순위로 정렬
  const sortedEmotions = Array.isArray(emotionData)
    ? emotionData.slice().sort((a, b) => b.nums - a.nums)
    : quddies.map((quddy) => ({ diaryEmotion: quddy.emotion, nums: 0 }));

  return (
    <div className="w-[400px] ml-16 mt-10 mb-8">
      <h1 className="text-xl font-semibold items-center mb-10">
        {format(currentDate, 'M')}월 감정 리스트 순위
      </h1>
      <div className="flex gap-12">
        <div className="flex flex-col items-start">
          {sortedEmotions.map((emotion, index) => {
            const quddyData = getQuddyData(emotion.diaryEmotion);
            return index === 0 ? (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={quddyData.imgSrc}
                  alt={emotion.diaryEmotion}
                  className="w-[145px] h-[160px]"
                />
                <span
                  className="font-meetme text-2xl mb-3"
                  style={{ color: quddyData.color }}
                >
                  {quddyData.name}
                </span>
                <span className="text-3xl bg-[#C79A76] rounded-[64px] px-5 mb-2">
                  {index + 1}위
                </span>
                <span className="text-2xl font-thin">{emotion.nums}회</span>
              </div>
            ) : null;
          })}
        </div>
        <div className="flex flex-col items-end mt-[-26px]">
          {sortedEmotions.map((emotion, index) => {
            const quddyData = getQuddyData(emotion.diaryEmotion);
            return index !== 0 ? (
              <div key={index} className="flex flex-col items-end mb-[-12px]">
                <div className="flex gap-5">
                  <div className="flex flex-col items-end mt-4">
                    <span className="text-[20px] text-neutral-500">
                      {index + 1}위
                    </span>
                    <span className="text-sm text-neutral-500">
                      {emotion.nums}회
                    </span>
                  </div>
                  <img
                    src={quddyData.imgSrc}
                    alt={emotion.diaryEmotion}
                    className="mb-4 w-[75px] h-[85px]"
                  />
                </div>
                <span
                  className="font-meetme text-xl relative top-[-16px] mr-2"
                  style={{ color: quddyData.color }}
                >
                  {quddyData.name}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default RankSection;
