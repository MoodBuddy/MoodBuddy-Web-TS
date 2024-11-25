import happyQuddy from '@assets/happyQuddy.svg';
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
    <div className='transform scale-[85%]'>
      <div className='flex items-center gap-[30px] w-[1570px] h-[95px] transform scale-75 mt-8 mb-4 ml-10'>
        <img
          src={happyQuddy}
          alt='happyQuddy'
          className='w-[125px] h-[127px]'
        />
        <div className='font-meetme text-[70px]'>
          {secondsDifference > 30
            ? data.letterAnswerContent
              ? `제가 보낸 "${replyMessage}"의 편지가 도착했어요!`
              : `아직 답장이 도착하지 않았어요 !`
            : `아직 답장이 도착하지 않았어요 !`}
        </div>
      </div>
    </div>
  );
};

export default QuddyLetterTopBar;
