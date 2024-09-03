import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import useDraftEditStore from '../../store/draftEditStore';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTemporaryDiaryStore from '../../store/temporaryDiaryStore';
import TemporaryStorage from './TemporaryStorage';

const Storage = ({ diaryDate, index, onSelectionChange, resetSelection }) => {
  const { draftEdit } = useDraftEditStore();
  const [isSelected, setIsSelected] = useState(false); // 체크박스 상태 추가
  const isInitialMount = useRef(true);
  const { temporaryDiary, setTemporaryDiary } = useTemporaryDiaryStore();
  const navigate = useNavigate();

  const formattedDate = format(new Date(diaryDate), 'yyyy년 MM월 dd일 (EEE)', {
    locale: ko,
  });

  useEffect(() => {
    setIsSelected(false);
  }, [draftEdit]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (onSelectionChange) {
        onSelectionChange(index, isSelected);
      }
    }
  }, [isSelected]);

  useEffect(() => {
    if (resetSelection) {
      setIsSelected(false);
    }
  }, [resetSelection]);

  const handleCheckboxChange = (e) => {
    setIsSelected(e.target.checked);
  };

  const handleDraftDiaryItem = async () => {
    setTemporaryDiary(true);
    navigate(`/diary/${index}`);
  };

  return (
    <>
      {draftEdit ? (
        <>
          <div
            onClick={handleDraftDiaryItem}
            className="cursor-pointer text-[13.5px] py-[17.25px] ml-[33px] "
          >
            {formattedDate} 일기
          </div>
        </>
      ) : (
        <div className="flex ml-[30px]">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
          ></input>
          <div className=" text-[13.5px] py-[17.25px] ml-[33px] ">
            {formattedDate} 일기
          </div>
        </div>
      )}
      <div className="w-[470px] border-b-[2px] border-[#D9D9D9] mx-auto"></div>
    </>
  );
};
export default Storage;
