import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import DiaryList from '../../components/SearchPage/DiaryList';
const BookMarkPage = () => {
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="mt-10">
          <div className="font-extrabold text-4xl mb-2 ml-2">북마크 일기</div>
          <div className="mb-[40px] font-light text-xl ml-2">
            내가 북마크한 추억의 일기를 볼 수 있어요.
          </div>
          <DiaryList filterType="bookMark" />
          <div className="mb-[110px]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BookMarkPage;
