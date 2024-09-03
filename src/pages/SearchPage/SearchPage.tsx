import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import SearchGuide from '../../components/SearchPage/SearchGuide';
import SearchBar from '../../components/SearchPage/SearchSection';
import styles from '@styles/check.module.css';

const SearchPage = () => {
  return (
    <div>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center gap-20 ${styles.check}`}
      >
        <SearchBar />
        <SearchGuide />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
