import { useEffect, useState } from 'react';
import Button from '../../common/button/Button';
import { addMonths, format } from 'date-fns';
import {
  getMonthStatic,
  postShortWordToNextMonth,
  updateShortWordToNextMonth,
} from '../../../apis/user';
import SaveModal from '../../WritingPage/SaveModal';

const MemoSection = ({ currentDate, shortWord, setShortWord }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [nextDate, setNextDate] = useState('');
  const [nextMonth, setNextMonth] = useState('');
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 관리 상태 변수
  const [isFirstComment, setIsFirstComment] = useState(true);
  const [existingComment, setExistingComment] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const maxLength = 150;
  /* get : 이번 달 코멘트(이번 달 연 월 일), 다음 달 작성 여부(다음 달 연 월 일)
    post : 다음 달 코멘트 저장, 다음 달 코멘트 업데이트 (다음 달 월)*/

  const handleButtonClick = () => {
    setIsModal(false);
  };

  const updateDates = () => {
    const formattedDate = format(currentDate, 'yyyy-MM-dd'); // 현재 보이는 날짜 2024-07-11 형태로
    const nextMonthDate = addMonths(currentDate, 1);
    const formattedNextMonth = format(nextMonthDate, 'yyyy-MM-dd'); // 다음 달 2024-07-11 형태로
    const formattedNextMonthonly = format(nextMonthDate, 'yyyy-MM'); // 다음 달 2024-07 형태로
    setIsFirstComment(true);
    setText('');

    setDate(formattedDate);
    setNextDate(formattedNextMonth);
    setNextMonth(formattedNextMonthonly);
  };

  const getComment = async (date) => {
    try {
      const res = await getMonthStatic(date);
      console.log(res);
      const monthComment = res.monthComment;
      setShortWord(monthComment);
    } catch (error) {
      console.error('데이터 불러오기에 실패하였습니다.', error);
    }
  };

  const checkIsFirstComment = async (nextMonth) => {
    console.log(nextMonth);
    try {
      const res = await getMonthStatic(nextMonth);
      console.log(res);
      const isMonthComment = res.commentCheck;
      const existing = res.monthComment;
      console.log(isMonthComment);
      isMonthComment
        ? (setIsFirstComment(false), setExistingComment(existing))
        : setIsFirstComment(true);
      return existing;
    } catch (error) {
      console.error('데이터 불러오기에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    updateDates();
  }, [currentDate]);

  useEffect(() => {
    const fetchData = async () => {
      if (date && nextDate && nextMonth) {
        await getComment(date);
        await checkIsFirstComment(nextDate);
      }
    };

    fetchData();
  }, [date, nextDate, nextMonth]);

  /*저장 버튼 눌렀을 때 (다음 달 연 월 전송)*/
  const saveComment = async () => {
    console.log(isFirstComment);
    try {
      const comment = {
        chooseMonth: nextMonth,
        monthComment: text,
      };
      let res;
      if (isFirstComment) {
        console.log('처음 저장');
        res = await postShortWordToNextMonth(comment);
      } else {
        console.log('업데이트');
        res = await updateShortWordToNextMonth(comment);
      }

      console.log(res);
      setIsModal(true);
      setIsValid(true);

      setIsEditing(false);
      await checkIsFirstComment(nextDate);
    } catch (error) {
      setIsValid(false);
      setMessage('한 마디 저장에 실패했습니다.');
      throw new Error('데이터 불러오기에 실패하였습니다.');
    }
  };

  return (
    <div className="px-8 flex flex-col items-center mb-10">
      <h1 className="text-2xl font-semibold self-start mb-8 ml-3">
        다음 달 나에게 짧은 한 마디
      </h1>

      <div className="relative w-[1000px]">
        {!isFirstComment && !isEditing ? (
          <div className="w-full h-[180px] text-lg p-4 bg-[#F7F3EF] rounded-2xl border-[1px] border-black resize-none">
            {existingComment}
          </div>
        ) : (
          <>
            <textarea
              type="text"
              maxLength={maxLength}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-[180px] text-lg p-4 bg-white rounded-2xl border-[1px] border-black resize-none"
            />
            <div className="absolute bottom-4 right-6 text-neutral-400">{`${text.length} / ${maxLength}`}</div>{' '}
          </>
        )}
      </div>
      {!isFirstComment && !isEditing ? (
        <Button
          onClick={() => {
            setIsEditing(true);
            setText(existingComment);
          }}
          className="self-end mr-2 my-5"
        >
          <p className="text-lg px-16 font-normal">수정</p>
        </Button>
      ) : (
        <Button onClick={saveComment} className="self-end mr-2 my-5">
          <p className="text-lg px-16 font-normal">저장</p>
        </Button>
      )}
      {isModal && (
        <SaveModal
          isValid={isValid}
          handleButtonClick={handleButtonClick}
          setIsModal={setIsModal}
          diary={false}
          message={message}
        />
      )}
    </div>
  );
};

export default MemoSection;
