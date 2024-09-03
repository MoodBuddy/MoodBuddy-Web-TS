import { useState } from 'react';
import TimePicker from '../common/timePicker/TimePicker';
import Button from '../common/button/Button';
import Toggle from '../common/toggle/Toggle';

const AuthSection = () => {
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState('');
  const [notificationTime, setNotificationTime] = useState(new Date());
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const handleToggleChange = (toggleState) => {
    setIsNotificationEnabled(toggleState);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleTimeChange = (newTime) => {
    setNotificationTime(newTime);
  };

  // 추가설정 완료 로직
  const handleSubmit = () => {
    console.log(notificationTime);
    console.log(gender);
    console.log(birthday);
  };

  return (
    <div className="w-[1080px] bg-[#F7F3EF] flex flex-col rounded-[36px] py-16 px-20 my-20">
      <h1 className="font-meetme text-4xl mb-10">추가설정</h1>

      <div className="flex flex-col text-xl gap-10">
        <div className="flex items-center gap-[134px]">
          <p>성별</p>
          <div className="flex gap-0.5 text-base font-normal">
            <Button
              color="white"
              className={`border-black rounded-[3px] ${gender === 'male' ? 'bg-[#d2bda9] text-white' : ''}`}
              onClick={() => handleGenderSelect('male')}
            >
              남성
            </Button>
            <Button
              color="white"
              className={`border-black rounded-[3px] ${gender === 'female' ? 'bg-[#d2bda9] text-white' : ''}`}
              onClick={() => handleGenderSelect('female')}
            >
              여성
            </Button>
            <Button
              color="white"
              className={`border-black rounded-[3px] ${gender === 'none' ? 'bg-[#d2bda9] text-white' : ''}`}
              onClick={() => handleGenderSelect('none')}
            >
              선택하지 않음
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>생년월일</p>
          <input
            type="text"
            value={birthday}
            onChange={handleBirthdayChange}
            className="h-[45px] w-[750px] text-lg placeholder-stone-300 bg-white/opacity-90 rounded-lg border border-black px-6"
            placeholder="생년월일 8자리"
          />
        </div>
        <div className="flex items-center gap-[58px]">
          <p>SMS 알림</p>
          <Toggle onToggleChange={handleToggleChange} />

          {isNotificationEnabled && (
            <div className="flex items-center gap-8 mx-20">
              <p>알림시간</p>
              <TimePicker onTimeChange={handleTimeChange} />
            </div>
          )}
        </div>

        <div className="flex items-center justify-end">
          <Button onClick={handleSubmit} className="rounded-lg">
            <p className="px-10">완료</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
