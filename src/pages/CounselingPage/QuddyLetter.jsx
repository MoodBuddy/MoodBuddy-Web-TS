import { useParams } from 'react-router-dom';
import QuddyLetterContent from '../../components/CounselingPage/QuddyLetterContent';
import QuddyLetterTopBar from '../../components/CounselingPage/QuddyLetterTopBar';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import Footer from '../../components/common/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { getLetterDetails } from '../../apis/letter';
import halfHappyQuddy from '@assets/halfHappyQuddy.svg';

const QuddyLetter = () => {
  const { id } = useParams();

  const {
    isError,
    data: letter,
    error,
  } = useQuery({
    queryKey: ['letter', id],
    queryFn: () => getLetterDetails(id),
    enabled: !!id,
  });

  if (isError) {
    console.error('Error fetching letter:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <QuddyLetterTopBar data={letter} />
        <QuddyLetterContent data={letter} />
      </div>
      <div className="relative">
        <img
          src={halfHappyQuddy}
          alt="halfHappyQuddy"
          className="w-[700px] h-[500px] absolute left-[-360px] top-[-243px] transform -translate-y-1/2"
        />
      </div>
      <Footer />
    </>
  );
};

export default QuddyLetter;
