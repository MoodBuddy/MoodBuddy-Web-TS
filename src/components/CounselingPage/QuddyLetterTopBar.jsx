import msg from '@assets/msg.svg';
import { formatDate } from '../../utils/format';

const QuddyLetterTopBar = ({ data }) => {
  const formattedDate = formatDate(data.letterDate);

  // 현재 시간과 편지 받은 시간의 차이를 계산
  const letterDate = new Date(data.letterDate);
  const currentDate = new Date();
  const timeDifference = currentDate - letterDate;
  const secondsDifference = timeDifference / 1000;

  const replyMessage =
    data.letterFormat === 1 ? '따뜻한 위로의 말' : '따끔한 해결의 말';

  console.log(`간격이 ${secondsDifference}초입니다.`);

  return (
    <div className="transform scale-[85%]">
      <div className="flex items-center gap-[30px] w-[1570px] h-[95px] bg-[#F7F3EF] border-[3px] border-black transform scale-75 mt-12 rounded-[20px]">
        <img className="ml-[67px]" src={msg} alt="message icon" />
        <div className="font-meetme text-[40px]">
          {secondsDifference > 30
            ? data.letterAnswerContent
              ? `${formattedDate} | 쿼디에게 "${replyMessage}" 답장이 도착했어요`
              : `${formattedDate} | 아직 답장이 도착하지 않았어요`
            : `${formattedDate} | 아직 답장이 도착하지 않았어요`}
        </div>
      </div>
    </div>
  );
};

export default QuddyLetterTopBar;
