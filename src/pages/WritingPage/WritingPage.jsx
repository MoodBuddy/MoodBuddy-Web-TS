import TopBar from '../../components/WritingPage/TopBar';
import Diary from '../../components/WritingPage/Diary';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import Footer from '../../components/common/layout/Footer';

import { useEffect, useState } from 'react';
import useCalendarStore from '../../store/calendarStore';

const WritingPage = () => {
  const [templateOn, setTemplateOn] = useState(true);
  const { selectedDate } = useCalendarStore();

  useEffect(() => {
    console.log(selectedDate);
  }, []);

  const handleTemplate = () => {
    setTemplateOn(!templateOn);
  };

  return (
    <>
      <NavBar></NavBar>
      <TopBar
        selectedDate={selectedDate}
        setTemplateOn={handleTemplate}
      ></TopBar>

      <div className={`flex justify-center ${styles.check} `}>
        <Diary
          selectedDate={selectedDate}
          templateOn={templateOn}
          setTemplateOn={handleTemplate}
        ></Diary>
      </div>
      <Footer />
    </>
  );
};
export default WritingPage;
