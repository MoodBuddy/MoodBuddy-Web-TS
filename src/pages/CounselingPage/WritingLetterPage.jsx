import { useEffect } from 'react';
import CounselingTopBar from '../../components/CounselingPage/CounselingTopBar';
import Letter from '../../components/CounselingPage/Letter';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import useContentStore from '../../store/contentStore';
import halfHappyQuddy from '@assets/halfHappyQuddy.svg';

const WritingLetterPage = () => {
  const { setContent } = useContentStore();
  useEffect(() => {
    setContent('');
  }, []);
  return (
    <div className="relative">
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check} relative`}
      >
        <CounselingTopBar />
        <Letter />
      </div>
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <img
          src={halfHappyQuddy}
          alt="halfHappyQuddy"
          className="absolute w-[700px] h-[500px] bottom-16 left-[-360px] transform -translate-y-1/2"
        />
      </div>
      <Footer />
    </div>
  );
};
export default WritingLetterPage;
