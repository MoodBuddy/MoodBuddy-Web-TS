import completeQuddy from '@assets/completeQuddy.svg';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';

const CompleteSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EDE2DA]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-meetme text-3xl">MOODBUDDY</h1>
        <h1 className="font-meetme text-6xl">회원가입이 완료되었어요 !</h1>
      </div>

      <div className="flex items-end gap-10 my-12">
        <img src={completeQuddy} alt="completeQuddy" />
      </div>

      <Button
        onClick={handleClick}
        color="brown"
        className="w-[450px] h-[84px] flex justify-center rounded-[13px] items-center gap-6 mt-6"
      >
        <p className="font-semibold text-[25px]">로그인 바로가기</p>
      </Button>
    </div>
  );
};

export default CompleteSection;
