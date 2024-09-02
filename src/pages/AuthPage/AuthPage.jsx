import AuthSection from '../../components/AuthPage/AuthSection';
import styles from '@styles/check.module.css';
import AuthTopBar from '../../components/common/layout/AuthTopBar';

const AuthPage = () => {
  return (
    <>
      <AuthTopBar />
      <div className={`flex items-center justify-center ${styles.check}`}>
        <AuthSection />
      </div>
    </>
  );
};

export default AuthPage;
