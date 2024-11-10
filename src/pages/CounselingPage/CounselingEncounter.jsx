import { useQuery } from "@tanstack/react-query";
import { getLetter } from "../../apis/letter";
import CounselingTopBar from "../../components/CounselingPage/CounselingTopBar";
import MailBox from "../../components/CounselingPage/MailBox";
import Profile from "../../components/CounselingPage/Profile";
import Footer from "../../components/common/layout/Footer";
import NavBar from "../../components/common/layout/NavBar";
import styles from "@styles/check.module.css";
import helloQuddy from "@assets/helloQuddy.svg";
import Button from "@components/common/button/Button";
import { useNavigate } from "react-router-dom";

const CounselingEncounterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="flex flex-col justify-center items-center my-[140px]">
          <div className="font-meetme text-[60px] leading-[60px] text-center">
            나영님! 오늘의 고민이 무엇인가요?
            <br />
            저에게 털어놔보세요 :)
          </div>
          <div className="w-[320px] rotate-[40deg] mt-[20px]">
            <img src={helloQuddy} />
          </div>
          <div className="flex gap-[22px] mt-[20px]">
            <button
              onClick={() => navigate("/counseling/writingLetter")}
              className="w-[180px] h-[60px] rounded-[10px] bg-[#C79A76] text-[25px] font-extrabold"
            >
              편지 보내기
            </button>
            <button className="w-[180px] h-[60px] rounded-[10px] bg-[#C79A76] text-[25px] font-extrabold">
              답장 보기
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CounselingEncounterPage;
