import { useNavigate } from 'react-router-dom';
import back from '../../../public/icon/back.svg';
const LetterPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/counseling');
  };
  return (
    <>
      <div className="transform scale-75 relative top-[-220px]">
        <div className="box-content border-[1px] border-black w-[1600px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-200px] pb-[20px]">
          <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-start gap-[616px] items-center">
            <img src={back} onClick={handleBack} className="cursor-pointer" />
            <div className="font-medium text-[35px]">To.QUDDY</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LetterPage;
