import { useEffect, useRef, useState } from "react";
import CounselingTopBar from "../../components/CounselingPage/CounselingTopBar";
import Letter from "../../components/CounselingPage/Letter";
import Footer from "../../components/common/layout/Footer";
import NavBar from "../../components/common/layout/NavBar";
import styles from "@styles/check.module.css";
import useContentStore from "../../store/contentStore";
import halfHappyQuddy from "@assets/halfHappyQuddy.svg";
import happyQuddy from "@assets/happyQuddy.svg";
import questionMark from "@assets/questionMark.svg";
import QuestionMarkModal from "./QuestionMarkModal";
import questionMarkActive from "@assets/questionMarkActive.svg";
import helloQuddy from "@assets/helloQuddy.svg";

const WritingLetterPage = () => {
  const { setContent } = useContentStore();
  const modalRef = useRef(null);
  const [questionMarkModal, setQuestionMarkModal] = useState(false);

  useEffect(() => {
    setContent("");
  }, []);

  const handleQuestionMark = () => {
    setQuestionMarkModal(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setQuestionMarkModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setQuestionMarkModal]);

  return (
    <>
      <div className="relative">
        <NavBar />
        <div
          className={`flex flex-col justify-center items-center ${styles.check} relative`}
        >
          <div className="flex items-center gap-[31.9px] w-[1000px] mt-[45.27px] mb-[10px]">
            <img src={happyQuddy} className="w-[101.16px] h-[107.2px]" />
            <div className="font-meetme text-[55px]">
              오늘의 고민이 무엇인가요?
            </div>
          </div>
          <div className="absolute top-[115px] z-30 flex justify-end gap-3 w-[1180px] mb-[10px]">
            <div
              className={`font-medium font-inter ${questionMarkModal ? "text-[#ffffff] z-30" : "text-[#747474]"} mt-1.5`}
            >
              남은 편지지 개수 : 3개
            </div>
            <div className="relative">
              <img
                onClick={handleQuestionMark}
                className="relative cursor-pointer"
                src={questionMarkModal ? questionMarkActive : questionMark}
              />
              {questionMarkModal && (
                <div
                  ref={modalRef}
                  className="absolute right-[-180px] w-[403px] h-[163px] rounded-[25px] bg-[#F7F3EF] overflow-hidden"
                >
                  <div className="absolute left-[32px] top-[29px] text-[23px] ">
                    오늘의 일기를 작성하면
                    <br /> 편지지 1개가 주어져요 !
                  </div>
                  <img
                    src={helloQuddy}
                    className="absolute top-[8px] right-[-70px] w-[200px] rotate-[45deg]"
                  />
                </div>
              )}
            </div>
          </div>
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
      {questionMarkModal && (
        <div
          style={{ background: "rgba(13, 13, 13, 0.6) " }}
          className="flex justify-center items-center fixed inset-0 z-20"
        ></div>
      )}
    </>
  );
};
export default WritingLetterPage;
