import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import Toggle from '../common/toggle/Toggle';
import { useEffect, useState } from 'react';
import { postAlarm } from '../../apis/letter';
import { getProfile } from '../../apis/user';
import { useQuery } from '@tanstack/react-query';
import useCalendarClickStore from '../../store/calendarClick';

const Profile = ({ data }) => {
  const navigate = useNavigate();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const { setCalendarClick } = useCalendarClickStore();
  const {
    isError,
    data: profile,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  useEffect(() => {
    if (data && data.letterAlarm !== undefined) {
      setIsNotificationEnabled(data.letterAlarm);
    }
  }, [data]);

  const handleWritingLetter = () => {
    setCalendarClick(false);
    const letterNums = data.userLetterNums;
    if (letterNums === 0) {
      navigate('/counseling/noWritingLetter');
    } else {
      navigate('/counseling/writingLetter');
    }
  };

  const handleToggleChange = async (toggleState) => {
    if (!profile || !profile.phoneNumber) {
      alert('프로필에서 전화번호를 먼저 설정해주세요.');
      window.location.reload();
      return;
    }

    setIsNotificationEnabled(toggleState);
    console.log(toggleState);
    try {
      await postAlarm({ letterAlarm: toggleState });
    } catch (error) {
      console.error('알림 설정 업데이트에 실패했습니다:', error);
    }
  };

  return (
    <div className=" flex flex-col items-center w-[286px] h-[680px] bg-[#F7F3EF] rounded-2xl">
      <div className="transform scale-75 relative top-[-110px]">
        <Button
          onClick={handleWritingLetter}
          className="w-[332px] h-[71px] rounded-[30px] bg-[#C79A76] font-semibold text-[30px] mt-5"
        >
          편지 쓰기
        </Button>
        <div className="flex justify-between items-center w-[283px] mt-[25px] ml-[20px]">
          <div className="text-[28px] ">남은 편지지 개수</div>
          <div className="font-semibold text-[40px]">{data.userLetterNums}</div>
        </div>
        <div className="text-xl mt-[10px] flex justify-start w-[285px] text-[#676767]  ml-[20px] ">
          오늘의 일기를 작성하고,
          <br />
          편지지를 받아 고민을 털어놓으세요 !
        </div>
        <div className="w-full border-b-[1px] border-[#888888] mt-[26px]"></div>

        <img
          src={data.profileImageUrl}
          className="mt-[35px] mx-auto w-[320px] h-[360px] rounded-3xl object-cover"
        ></img>
        <div className="ml-3">
          <div className="flex items-end mt-[20px]">
            <div className="font-semibold text-4xl mr-4">{data.nickname}</div>
            <div className="font-thin text-xl">{data.userBirth}</div>
          </div>
          <div className="text-[22px] mt-3 h-[30px] w-[320px] whitespace-pre-wrap">
            {data.profileComment}
          </div>
        </div>
        <div className="flex items-center gap-12 mt-[60px] ml-2">
          <p className="text-2xl font-medium">답장 SMS알림설정</p>
          <Toggle
            onToggleChange={handleToggleChange}
            isEnabled={isNotificationEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
