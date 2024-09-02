import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import EditProfileCard from '../../components/MyPage/EditProfile/EditProfileCard';
import Footer from '../../components/common/layout/Footer';
const EditProfilePage = () => {
  return (
    <>
      <NavBar />
      <div
        className={` flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="mt-10">
          <div className="font-extrabold text-4xl mb-2">프로필 수정</div>
          <div className="mb-[40px] font-light text-xl">
            무드버디에서 사용하는 프로필을 수정하실 수 있어요.
          </div>
          <div className="mb-[110px]">
            <EditProfileCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default EditProfilePage;
