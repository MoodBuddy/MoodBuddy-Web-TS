import QuddyTiInfo from '../../components/MyPage/QuddyTi/QuddyTiInfo';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';

const QuddyTiPage = () => {
  return (
    <div>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="w-[1080px] ml-44 mt-10 gap-2 mr-40">
          <h1 className="text-4xl font-extrabold mb-2">월별 통계 보기</h1>
          <p className="text-xl font-light">
            월별로 내가 쓴 일기에 대한 통계를 볼 수 있어요.
          </p>
        </div>
        <div className="bg-[#F7F3EF] w-[1080px] rounded-[36px] my-10">
          <QuddyTiInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuddyTiPage;
