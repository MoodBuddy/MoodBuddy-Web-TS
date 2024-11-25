import { useState } from "react";
import { useNavigate } from "react-router-dom";
import happyQuddy from "@assets/happyQuddy.svg";
import calmQuddy from "@assets/calmQuddy.svg";
import surpriseQuddy from "@assets/surpriseQuddy.svg";
import angryQuddy from "@assets/angryQuddy.svg";
import gloomyQuddy from "@assets/gloomyQuddy.svg";
import Button from "../common/button/Button";
import useAuthStore from "@store/authStore";
import { postTestLogin } from "@apis/auth";
import { setTokens } from "@apis/utils";

const WelcomeSection = () => {
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthStore();

  const handleLogin = async () => {
    try {
<<<<<<< HEAD
      const res = await postTestLogin({ kakaoId });
      console.log(res);
      const { accessToken, refreshToken } = res;
      console.log(accessToken, refreshToken);
=======
      const res = await postTestLogin({ userId });
      const { accessToken, refreshToken } = res;

>>>>>>> a883c3425963b336b4a9d81e34eab73ff4303536
      if (accessToken && refreshToken) {
        setTokens(accessToken, refreshToken); // 토큰 저장
        setAuthenticated(true); // 인증 상태 업데이트
        navigate("/home");
      } else {
        throw new Error("로그인에 실패하였습니다.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
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
<<<<<<< HEAD
            value={kakaoId}
            onChange={(e) => setKakaoId(e.target.value)}
=======
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
>>>>>>> a883c3425963b336b4a9d81e34eab73ff4303536
            onKeyDown={handleKeyDown}
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
