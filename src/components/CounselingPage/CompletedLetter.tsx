import { useNavigate } from 'react-router-dom';
import back from '../../../public/icon/back.svg';
import letterContent from '../../store/contentStore';
import { formatDate } from '../../utils/format';
import { getProfile } from '../../apis/user';
import { useQuery } from '@tanstack/react-query';

const CompletedLetter = () => {
  const { content } = letterContent();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/counseling');
  };

  const { isError, data, error } = useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });

  const todayDate = formatDate();

  return (
    <div className="z-10">
      <div className="box-content border-[1px] w-[1000px] h-[900px] border-black  bg-[#F7F3EF] rounded-3xl pb-[20px] mb-20">
        <div className="px-[23px] w-full py-[19px] border-b-[1px] border-black flex justify-start gap-[330px] items-center">
          <img
            src={back}
            onClick={handleBack}
            className="cursor-pointer w-6 h-6"
          />
          <div className="font-medium text-2xl ml-20">To.QUDDY</div>
        </div>
        <div className="flex flex-col">
          <div className="text-center px-28 mr-24 mt-[150px] mx-auto font-light text-xl leading-[66px] bg-[#F7F3EF] outline-none w-[900px] h-[600px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
            {content}
          </div>
          <div className="flex flex-col items-end font-medium text-xl gap-[10px] mr-10">
            <div>{todayDate}</div>
            <div>From.{data.nickname}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompletedLetter;
