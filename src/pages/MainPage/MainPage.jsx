import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import AnalysisSection from '../../components/MainPage/AnalysisSection';
import CalendarSection from '../../components/MainPage/CalendarSection';
import IntroduceSection from '../../components/MainPage/IntroduceSection';
import useUserStore from '../../store/userStore';
import { getUserInfo } from '../../apis/user';
import useTemporaryDiaryStore from '../../store/temporaryDiaryStore';

const MainPage = () => {
  const { setTemporaryDiary } = useTemporaryDiaryStore();
  const { isError, data, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  const setUserStore = useUserStore((state) => state.setUserInfo);

  useEffect(() => {
    if (data) {
      setUserStore(data);
    }
  }, [data, setUserStore]);

  useEffect(() => {
    setTemporaryDiary(false);
  }, []);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error('Error fetching user info:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <IntroduceSection />
      <AnalysisSection />
      <CalendarSection />
      <Footer />
    </>
  );
};

export default MainPage;
