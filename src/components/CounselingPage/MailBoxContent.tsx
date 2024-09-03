import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHours, addMinutes, addSeconds } from 'date-fns';
import { formatDate } from '../../utils/format';

const MailBoxContent = ({ letter }) => {
  const navigate = useNavigate();
  const [replyMessage, setReplyMessage] = useState('');

  const handleMailBox = () => {
    navigate(`/counseling/letter/${letter.letterId}`);
  };

  useEffect(() => {
    if (letter.letterDate) {
      const createdTime = new Date(letter.letterDate);
      // 12시간 뒤에 보여지게 설정, 현재는 임의로 30초로 수정
      // const replyAvailableTime = addHours(createdTime, 12);

      const replyAvailableTime = addSeconds(createdTime, 30);
      const currentTime = new Date();
      if (currentTime >= replyAvailableTime) {
        setReplyMessage('ㅣ 답장이 도착했어요.');
      } else {
        setReplyMessage('');
      }
    }
  }, [letter.letterDate]);

  const formattedDate = formatDate(letter.letterDate);

  return (
    <div
      onClick={handleMailBox}
      className="flex items-center w-full h-[58px] pl-[25px] box-content py-3 font-medium text-[22px] border-b-[1px] border-[#D1D1D1] cursor-pointer"
    >
      {formattedDate} ㅣ 쿼디에게 고민을 보냈어요. {replyMessage}
    </div>
  );
};

export default MailBoxContent;
