import { useState, useEffect } from 'react';
import back from '../../../public/icon/back.svg';
import { useNavigate } from 'react-router-dom';
import { addHours, addMinutes, addSeconds } from 'date-fns';
import Timer from './Timer';
import useShowAnswerStore from '../../store/showAnswerStore';

const QuddyLetterContent = ({ data }) => {
  const navigate = useNavigate();
  const { showAnswer, setShowAnswer } = useShowAnswerStore((state) => ({
    showAnswer: state.showAnswer,
    setShowAnswer: state.setShowAnswer,
  }));
  const [timeToDisplayAnswer, setTimeToDisplayAnswer] = useState(null);
  console.log(data);
  useEffect(() => {
    if (data && data.letterDate) {
      const letterDate = new Date(data.letterDate);
      // 12시간 뒤에 보여지게 설정, 현재는 임의로 3분으로 수정
      // const displayTime = addHours(letterDate, 12);

      const displayTime = addSeconds(letterDate, 30);
      setTimeToDisplayAnswer(displayTime);
    }
  }, [data]);

  useEffect(() => {
    const currentTime = new Date();
    if (timeToDisplayAnswer && currentTime >= timeToDisplayAnswer) {
      setShowAnswer(true);
    }
  }, [timeToDisplayAnswer]);

  const handleBack = () => {
    navigate('/counseling');
  };

  if (!data) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="z-10">
      <div className="box-content border-[1px] w-[1000px] border-black  bg-[#F7F3EF] rounded-3xl pb-[20px] mb-[183px]">
        <div className="px-[23px] w-full py-[19px] border-b-[1px] border-black flex justify-start gap-[316px] items-center">
          <img
            src={back}
            onClick={handleBack}
            className="cursor-pointer w-6 h-6"
          />
          <div className="font-medium text-2xl ml-[80px]">To.QUDDY</div>
        </div>

        <div className="text-center my-[103px] mx-auto font-light text-xl leading-[50px] bg-[#F7F3EF] outline-none w-[1000px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
          <p className="px-20"> {data.letterWorryContent}</p>
        </div>

        <div className="flex items-center justify-center py-[19px] border-y-[1px] border-black font-medium text-2xl">
          From. QUDDY
        </div>

        <div className="flex flex-col justify-center items-center h-[485px]">
          {showAnswer ? (
            <div className="text-center font-light text-xl leading-[50px] bg-[#F7F3EF] outline-none w-[1000px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
              <p className="px-20">{data.letterAnswerContent}</p>
            </div>
          ) : (
            <>
              <div className="font-light text-3xl mt-6 text-[#7c7c7c]">
                답장이 오는 중입니다! 조금만 기다려주세요 :)
              </div>
              <div className="transform scale-75">
                <Timer displayTime={timeToDisplayAnswer} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuddyLetterContent;
