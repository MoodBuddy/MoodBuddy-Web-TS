import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/loading/LoadingSpinner';

const KakaoLoginAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('로그인 하기');
    const kakaoLogin = async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `${import.meta.env.VITE_API_BASE_URL}/api/v1/user/login/oauth2/code/kakao?code=${code}`,
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        const { accessToken, refreshToken } = res.data;
        sessionStorage.setItem(
          'session',
          JSON.stringify({ token: accessToken }),
        );
        sessionStorage.setItem('i', refreshToken);
        navigate('/home');
      } catch (error) {
        console.log('kakaoLogin Failed', error);
      }
    };

    if (code) {
      kakaoLogin();
    }
  }, [navigate]);

  return <LoadingSpinner />;
};

export default KakaoLoginAuth;
