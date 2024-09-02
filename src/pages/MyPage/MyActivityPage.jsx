import styles from '@styles/check.module.css';
import NavBar from '../../components/common/layout/NavBar';
import Footer from '../../components/common/layout/Footer';
import DiaryCount from '../../components/MyPage/MyActivity/DiaryCount';
import ShowEmotions from '../../components/MyPage/MyActivity/ShowEmotions';
const MyActivityPage = () => {
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="mt-10">
          <div className="font-extrabold text-4xl mb-2">내 활동</div>
          <div className="mb-[40px] font-light text-xl">
            현재까지 작성한 일기 횟수와 감정을 볼 수 있어요.
          </div>
          <div className="flex gap-[24px] mb-[110px]">
            <DiaryCount />
            <ShowEmotions />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default MyActivityPage;
