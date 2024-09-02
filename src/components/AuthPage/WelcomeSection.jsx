import { useState } from 'react';
import happyQuddy from '@assets/happyQuddy.svg';
import calmQuddy from '@assets/calmQuddy.svg';
import surpriseQuddy from '@assets/surpriseQuddy.svg';
import angryQuddy from '@assets/angryQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../../store/authStore';

const WelcomeSection = () => {
  const [kakaoId, setKakaoId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthStore();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/member/test/login`,
        { kakaoId },
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        },
      );

      const { accessToken, refreshToken } = res.data.data;

      if (accessToken && refreshToken) {
        sessionStorage.setItem(
          'session',
          JSON.stringify({ token: accessToken }),
        );
        sessionStorage.setItem('i', refreshToken);
        setAuthenticated(true); // 인증 상태 업데이트
        navigate('/home');
      } else {
        throw new Error('로그인에 실패하였습니다.');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EDE2DA]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-meetme text-3xl">MOODBUDDY</h1>
        <h1 className="font-meetme text-6xl">
          쿼디와 함께 자신의 생각과 고민을 행복하게 정리해봐요 !
        </h1>
      </div>

      <div className="flex items-end gap-10 my-12">
        <img
          src={angryQuddy}
          alt="angryQuddy"
          className="w-[152px] h-[160px]"
        />
        <img
          src={surpriseQuddy}
          alt="surpriseQuddy"
          className="w-[202px] h-[214px]"
        />
        <img
          src={happyQuddy}
          alt="happyQuddy"
          className="w-[226px] h-[239px]"
        />
        <img src={calmQuddy} alt="calmQuddy" className="w-[202px] h-[214px]" />
        <img
          src={gloomyQuddy}
          alt="gloomyQuddy"
          className="w-[152px] h-[160px]"
        />
      </div>
      <div className="flex flex-col items-end gap-[20px]">
        <div className="flex gap-[53px]">
          <div className="font-medium text-[24px] w-[88px] ">아이디</div>
          <input
            className="border-[1px] border-black p-[10px] w-[390px] h-[40px] rounded-[7px]"
            value={kakaoId}
            onChange={(e) => setKakaoId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <Button
          color="brown"
          className="mt-[15px] w-[145px] h-[45px] bg-[#AC7544] text-[#FFFFFF] text-medium font-[20px] rounded-[8px]"
          onClick={handleLogin}
        >
          로그인
        </Button>
        {error && (
          <div className="flex justify-center items-center w-full mt-4">
            <div className="text-red-600 text-center">{error}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeSection;
