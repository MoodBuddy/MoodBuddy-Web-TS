import { useNavigate } from 'react-router-dom';
import back from '../../../public/icon/back.svg';
import Button from '../common/button/Button';
import { useState } from 'react';
import { checkTodayDiary } from '../../apis/user';
import AlertModal from '../common/layout/AlertModal';
import useCalendarClickStore from '../../store/calendarClick';
const NoWritingPad = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const { setCalendarClick } = useCalendarClickStore();

  const handleWriting = async () => {
    try {
      setCalendarClick(false);
      const res = await checkTodayDiary();
      console.log(res);
      if (!res.checkTodayDairy) {
        setIsModal(!isModal);
      } else {
        navigate('/writing');
      }
    } catch (error) {
      console.error('Error checking today diary:', error);
    }
  };

  const handleButtonClick = () => {
    setIsModal(false);
    navigate('/search');
  };

  return (
    <div className="z-10">
      <div>
        <div className="box-content border-[1px] w-[1000px] h-[939px] border-black  bg-[#F7F3EF] rounded-3xl pb-[20px]  mb-[145px]">
          {/* 상단 보내기 바 */}
          <div className="px-[23px] py-5 w-full border-b-[1px] border-black flex justify-start gap-[320px] items-center">
            <button onClick={() => navigate(-1)}>
              <img src={back} className="w-6 h-6" />
            </button>
            <div className="font-medium text-2xl ml-20">To.QUDDY</div>
          </div>

          {/* 편지 내용 작성 */}
          <div className="flex flex-col gap-[20px] justify-center items-center">
            <div className="mt-[200px] font-light text-[37.5px] text-[#7c7c7c]">
              편지지가 없는데 일기작성하러 갈까요?
            </div>
            <Button
              className=" w-[226px] h-[64px] text-[23px] mt-3"
              onClick={handleWriting}
            >
              일기 기록하러 가기
            </Button>
          </div>
        </div>
      </div>
      {isModal && (
        <AlertModal
          handleButtonClick={handleButtonClick}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
};
export default NoWritingPad;
