import helloQuddy from '@assets/helloQuddy.svg';
import QuddyTi from '../../../../public/image/QuddyTi.svg';
import { useNavigate } from 'react-router-dom';

const QuddyTiSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mypage/quddyti');
  };

  return (
    <div className="relative overflow-hidden py-12">
      <div onClick={handleClick} className="ml-28 cursor-pointer">
        <img src={QuddyTi} alt="QuddyTi" className="transform scale-[90%]" />
      </div>
      <div className="hidden xl:block absolute right-[-130px] top-[50%] transform -translate-y-1/2">
        <img
          src={helloQuddy}
          alt="helloQuddy"
          className="w-[450px] h-[450px] overflow-hidden"
        />
      </div>
    </div>
  );
};

export default QuddyTiSection;
