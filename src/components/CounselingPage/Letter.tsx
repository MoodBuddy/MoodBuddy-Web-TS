import { useState } from "react";
import back from "../../../public/icon/back.svg";
import SelectModal from "./SelectModal";
import useContentStore from "../../store/contentStore";
import { formatDate } from "../../utils/format";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import { getProfile } from "../../apis/user";
import { useQuery } from "@tanstack/react-query";

const Letter = () => {
  const { content, setContent } = useContentStore();
  const [sending, setSending] = useState(false);
  const isSending = () => {
    setSending(!sending);
  };
  const navigate = useNavigate();

  // const { isError, data, error } = useQuery({
  //   queryKey: ['getProfile'],
  //   queryFn: getProfile,
  // });

  const data = [];

  const todayDate = formatDate();

  const letter = {
    length: 1,
  };

  return (
    <div className="z-10">
      <div>
        <div className="box-content border-[1px] w-[1180px] h-[716px] border-black  bg-[#F7F3EF] rounded-3xl pb-[20px] mb-[145px]">
          {/* 상단 보내기 바 */}
          <div className="flex justify-between items-center w-full h-[104px] px-[23px] pt-2">
            <div className="ml-[50px] font-inter font-medium text-[38.55px] text-[#747474] ">
              To.QUDDY
            </div>

            <Button
              onClick={isSending}
              className="w-[170px] h-[55px] rounded-[13px] bg-[#D8B18E] font-semibold text-[23px]"
            >
              보내기
            </Button>
          </div>
          <div className="flex flex justify-center">
            <div className=" w-[1113px] border-b-[1px] border-black "></div>
          </div>
          {/* 편지 내용 작성 */}
          <div className="flex flex-col justify-center items-center">
            <textarea
              type="text"
              className="w-[1100px] h-[500px] bg-[#F7F3EF] mt-10  font-inter font-light text-xl leading-[45px]  outline-none resize-none overflow-y-auto custom-scrollbar placeholder:text-[7c7c7c] placeholder:opacity-50"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder={`${
                letter.length === 0
                  ? `편지지가 없습니다
오늘의 일기를 작성해주세요!

`
                  : `고민이 있다면, 쿼디에게 솔직하게 털어놓아보세요 
다음날, 쿼디가 답장을 보내줍니다.
쿼디에게 털어놓고 마음이 편안해지길 바랍니다`
              }`}
            />
            <div className="self-end flex flex-col items-end font-medium text-xl gap-[10px] mr-10">
              <div>{todayDate}</div>
              <div>From.{data.nickname}</div>
            </div>
          </div>
        </div>
      </div>
      <SelectModal sending={sending} setSending={setSending} />
    </div>
  );
};
export default Letter;
