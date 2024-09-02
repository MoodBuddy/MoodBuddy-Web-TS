import { useParams } from 'react-router-dom';
import NavBar from '../../components/common/layout/NavBar';
import Footer from '../../components/common/layout/Footer';
import DiarySection from '../../components/DiaryPage/DiarySection';
import styles from '@styles/check.module.css';

const DiaryPage = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <DiarySection diaryId={id} />
      </div>
      <Footer />;
    </>
  );
};

export default DiaryPage;
