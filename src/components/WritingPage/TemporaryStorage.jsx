import { useEffect, useState } from 'react';
import close from '../../../public/icon/close.svg';
import Storage from './Storage';
import { deleteDraft, getFindDraftAll, getFindOne } from '../../apis/diary';
import useDraftEditStore from '../../store/draftEditStore';
import useDraftNumStore from '../../store/draftNumStore';
import useDraftListStore from '../../store/draftListStore';
const TemporaryStorage = ({
  isTemporaryStorageModal,
  temporaryStorageModal,
}) => {
  const { draftDiaryNum, setDraftDiaryNum } = useDraftNumStore();
  const { draftList, setDraftList } = useDraftListStore();
  const [selectedCount, setSelectedCount] = useState(0); //체크박스 개수 상태
  const { draftEdit, setDraftEdit } = useDraftEditStore();
  const [selectedIndexes, setSelectedIndexes] = useState([]); // 선택된 인덱스들을 저장하는 상태
  const handleClose = () => {
    setSelectedCount(0);
    isTemporaryStorageModal();
    setSelectedIndexes([]);
  };
  useEffect(() => {
    setDraftEdit(true);
  }, [draftDiaryNum]);

  useEffect(() => {
    setSelectedCount(0);
  }, [draftEdit]);

  useEffect(() => {
    const DraftDiaryNum = async () => {
      try {
        const { draftList, draftLength } = await getFindDraftAll();
        setDraftDiaryNum(draftLength);
        setDraftList(draftList);
      } catch (error) {
        console.error('임시저장 글 불러오기 실패:', error);
      }
    };

    DraftDiaryNum();
  }, []);

  const handleEdit = () => {
    setDraftEdit(!draftEdit);
  };

  const handleSelectionChange = (index, isSelected) => {
    setSelectedIndexes((prev) => {
      let newSelectedIndexes;
      if (isSelected) {
        newSelectedIndexes = [...prev, index];
      } else {
        newSelectedIndexes = prev.filter((i) => i !== index);
      }
      setSelectedCount(newSelectedIndexes.length);
      return newSelectedIndexes;
    });
  };
  const handleDelete = async () => {
    if (
      window.confirm(`임시 저장된 일기 ${selectedCount}개를 삭제하시겠습니까?`)
    ) {
      try {
        await deleteDraft(selectedIndexes);
        const { draftList: newDraftList, draftLength } =
          await getFindDraftAll();
        setDraftDiaryNum(draftLength);
        setDraftList(newDraftList);
        setSelectedIndexes([]);
      } catch (error) {
        console.error('삭제 실패', error);
      }
    }
  };

  return (
    <>
      {temporaryStorageModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[500px] h-[494px] bg-[#F7F3EF] rounded-[40px] border-[5px] border-black">
            <div className="flex flex-col">
              <div
                className="flex justify-end mt-[28px] mr-[35px] cursor-pointer"
                onClick={handleClose}
              >
                <img className="w-[15px] h-[15px]" src={close} />
              </div>
              <div className="border-b-[2px] border-black w-[410px] mt-[18px] mx-auto"></div>
              <div className="font-meetme text-[31px] mt-[22px] ml-[37.5px]">
                임시저장한 글
              </div>
              <div className="flex justify-between mx-[35px] mt-[40px]">
                {draftEdit ? (
                  <div className="text-[13.5px]">
                    <span>총</span>
                    <span className="font-bold"> {draftDiaryNum}</span>
                    <span>개</span>
                  </div>
                ) : (
                  <div className="text-[13.5px]">
                    <span>총</span>
                    <span className="font-bold"> {selectedCount}</span>
                    <span>개 선택됨</span>
                  </div>
                )}
                <div>
                  {draftEdit ? (
                    <button
                      onClick={handleEdit}
                      className="bg-[#D8B18E] w-[60px] h-[25px] rounded-[9px]  text-[11px] flex justify-center items-center cursor-pointer"
                    >
                      편집
                    </button>
                  ) : (
                    <div className="flex gap-[10px]">
                      <button
                        onClick={handleDelete}
                        className="bg-[#D8B18E] w-[60px] h-[25px] rounded-[9px] text-[11px] flex justify-center items-center cursor-pointer"
                      >
                        선택삭제
                      </button>
                      <button
                        onClick={handleEdit}
                        className="bg-[#D8B18E] w-[60px] h-[25px] rounded-[9px] text-[11px] flex justify-center items-center cursor-pointer"
                      >
                        완료
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[470px] relative right-[9px] mx-auto border-b-[2px] border-[#D9D9D9] mt-[21px]"></div>
              <div className="mr-[10px] h-[240px] overflow-x-hidden overflow-y-auto custom-scrollbar ">
                {draftList.map((it) => (
                  <Storage
                    index={it.diaryId}
                    diaryDate={it.diaryDate}
                    onSelectionChange={handleSelectionChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TemporaryStorage;
