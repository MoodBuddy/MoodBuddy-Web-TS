import { useState } from 'react';
import back from '../../../public/icon/back.svg';
import SelectModal from './SelectModal';
import useContentStore from '../../store/contentStore';
import { formatDate } from '../../utils/format';
import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import { getProfile } from '../../apis/user';
import { useQuery } from '@tanstack/react-query';

const Letter = () => {
  const { content, setContent } = useContentStore();
  const [sending, setSending] = useState(false);
  const isSending = () => {
    setSending(!sending);
  };
  const navigate = useNavigate();

  const { isError, data, error } = useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });

  const todayDate = formatDate();

  return (
    <div className="z-10">
      <div>
        <div className="box-content border-[1px] w-[1000px] h-[939px] border-black  bg-[#F7F3EF] rounded-3xl pb-[20px] mb-[145px]">
          {/* 상단 보내기 바 */}
          <div className="px-[23px] py-3 w-full border-b-[1px] border-black flex justify-between items-center">
            <button onClick={() => navigate(-1)}>
              <img src={back} className="w-6 h-6" />
            </button>
            <div className="font-medium text-2xl ml-20">To.QUDDY</div>
            <Button
              onClick={isSending}
              className="w-[100px] h-12 rounded-[13px] bg-[#D8B18E] font-bold text-lg"
            >
              보내기
            </Button>
          </div>

          {/* 편지 내용 작성 */}
          <div className="flex flex-col justify-center items-center">
            <textarea
              type="text"
              className="mt-[150px] px-28 mr-24 text-center font-light text-xl leading-[66px] bg-[#F7F3EF] outline-none resize-none w-[900px] h-[600px] overflow-y-auto custom-scrollbar"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="고민이 있다면 저에게 말해봐요 !
내가 다음날 답장을 보내줄게요.
나에게 고민을 털어버리고 훌훌 털어버려요"
            />
            <div className="self-end flex flex-col items-end font-medium text-xl gap-[10px] mr-10">
              <div>{todayDate}</div>
              <div>From.{data.nickname}</div>
            </div>
          </div>
        </div>
      </div>
      <SelectModal sending={sending} setSending={setSending} />
    </div>
  );
};
export default Letter;
