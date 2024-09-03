import img from '@assets/img.svg';
import save from '../../../public/icon/save.svg';
import temporary from '@assets/temporaryStorage.svg';
import showTemplate from '@assets/showTemplate.svg';
import { useEffect, useState } from 'react';
import TemporaryStorage from './TemporaryStorage.jsx';
import GotoAnalysis from './GotoAnalysis.jsx';
import useDiaryImgStore from '../../store/diaryImgStore.js';
import useDiaryImgFileStore from '../../store/diaryImgFileStore.js';
import useTitleStore from '../../store/titleStore.js';
import useDiaryContentStore from '../../store/diaryContentStore.js';
import useweatherStore from '../../store/weatherStore.js';
import {
  getFindDraftAll,
  SaveDraftDiary,
  updateDiaryOne,
} from '../../apis/diary.js';
import useDraftNumStore from '../../store/draftNumStore.js';
import useDraftListStore from '../../store/draftListStore.js';
import useUpdateDiaryStore from '../../store/updateDiaryStore.js';
import useDiaryItemIdStore from '../../store/diaryItemIdStore.js';
import { useNavigate } from 'react-router-dom';
import useTemporaryDiaryStore from '../../store/temporaryDiaryStore.js';
import useDiaryDateStore from '../../store/diaryDateStore.js';
import useDiaryKeepImgUrlStore from '../../store/diaryKeepImgUrlStore.js';
import SaveModal from './SaveModal.jsx';
import TemporaryModal from './TemporaryModal.jsx';
import useFontStore from '../../store/fontStore.js';
import useTextSizeStore from '../../store/textSizeStore.js';

const TopBar = ({ selectedDate, setTemplateOn }) => {
  const [temporaryStorageModal, setTemporaryStorageModal] = useState(false);
  const [gotoAnalysisEmotionModal, setGotoAnalysisEmotionModal] =
    useState(false);
  const { diaryImg, setDiaryImg } = useDiaryImgStore();
  const { imageFiles, addImageFile } = useDiaryImgFileStore();
  const { title } = useTitleStore();
  const { content } = useDiaryContentStore();
  const { selectedOption } = useweatherStore();
  const { draftDiaryNum, setDraftDiaryNum } = useDraftNumStore();
  const { setDraftList } = useDraftListStore();
  const { updateDiary, setUpdateDiary } = useUpdateDiaryStore();
  const { diaryItemId, setDiaryItemId } = useDiaryItemIdStore();
  const { temporaryDiary, setTemporaryDiary } = useTemporaryDiaryStore();
  const { diaryDate } = useDiaryDateStore();
  const { diaryKeepImg } = useDiaryKeepImgUrlStore();
  const { font } = useFontStore();
  const { textSize } = useTextSizeStore();
  const [isModal, setIsModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [diaryFont, setDiaryFont] = useState('');
  const [diaryTextSize, setDiaryTextSize] = useState('');

  const [isTemporaryModal, setIsTemporaryModal] = useState(false);
  const navigate = useNavigate();

  const today = new Date();
  today.setTime(today.getTime() + 9 * 60 * 60 * 1000); // 9시간 추가
  const todayUTC = today.toISOString();

  useEffect(() => {
    console.log(updateDiary);
    console.log(diaryItemId);
    console.log(temporaryDiary);
    console.log(selectedDate);
  }, []);

  useEffect(() => {
    console.log(font);
    console.log(textSize);
    if (font === 'meetme') {
      setDiaryFont('MEETME');
    } else {
      setDiaryFont('INTER');
    }
    if (textSize === '24px') {
      setDiaryTextSize('PX24');
    } else {
      if (textSize === '28px') {
        setDiaryTextSize('PX28');
      } else {
        setDiaryTextSize('PX30');
      }
    }

    console.log(diaryFont);
    console.log(diaryTextSize);
  }, [font, textSize]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(e.target.files);

    const newDiaryImgs = [];

    files.forEach((file) => {
      addImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        newDiaryImgs.push(event.target.result);
        if (newDiaryImgs.length === files.length) {
          setDiaryImg([...diaryImg, ...newDiaryImgs]);
          e.target.value = null;
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDiarySave = async () => {
    console.log(updateDiary);
    if (!updateDiary) {
      if (updateDiary && !temporaryDiary) {
        console.log(updateDiary);
        console.log(temporaryDiary);

        handleupdateDiary();
      } else {
        isGotoAnalysisEmotionModal();
      }
    } else {
      if (updateDiary && !temporaryDiary) {
        console.log(updateDiary);
        console.log(temporaryDiary);
        handleupdateDiary();
      } else {
        isGotoAnalysisEmotionModal();
      }
    }
  };

  const handleTemporaryModal = () => {
    setIsTemporaryModal(!isTemporaryModal);
  };

  const isTemporaryStorageModal = () => {
    setTemporaryStorageModal(!temporaryStorageModal);
  };

  const isGotoAnalysisEmotionModal = () => {
    setGotoAnalysisEmotionModal(!gotoAnalysisEmotionModal);
  };

  const handleButtonClick = () => {
    navigate(`/diary/${diaryItemId}`);
  };

  const CheckDraftDiary = () => {
    handleTemporaryModal();
  };

  const handleTemporaryClick = () => {
    handleDraftDiary();
    handleTemporaryModal();
  };
  const handleDraftDiary = async () => {
    try {
      const formData = new FormData();

      formData.append('diaryTitle', title);
      formData.append(
        'diaryDate',
        selectedDate ? selectedDate : todayUTC.slice(0, -14),
      );
      formData.append('diaryContent', content);
      formData.append('diaryWeather', selectedOption);
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('diaryImgList', imageFiles[i]);
      }
      formData.append('diaryFont', diaryFont);
      formData.append('diaryFontSize', diaryTextSize);
      console.log(...formData);
      const res = await SaveDraftDiary(formData);
      console.log(res.data.data.diaryId);
      const newDraftId = res.data.data.diaryId;

      const { draftList, draftLength } = await getFindDraftAll();
      setDraftDiaryNum(draftLength);
      setDraftList(draftList);
      return newDraftId;
    } catch (error) {
      console.error('일기 임시 저장 오류', error);
      throw error;
    }
  };

  const handleupdateDiary = async () => {
    try {
      const formData = new FormData();
      formData.append('diaryId', diaryItemId);
      formData.append('diaryTitle', title);
      formData.append(
        'diaryDate',
        new Date(diaryDate).toISOString().slice(0, -14),
      );
      formData.append('diaryStatus', 'PUBLISHED');
      formData.append('diaryContent', content);
      formData.append('diaryWeather', selectedOption);

      for (let i = 0; i < imageFiles.length; i++) {
        imageFiles.length > 0 && formData.append('diaryImgList', imageFiles[i]);
      }
      for (let i = 0; i < diaryKeepImg.length; i++) {
        diaryKeepImg.length > 0 &&
          formData.append('existingDiaryImgList', diaryKeepImg[i]);
      }
      formData.append('diaryFont', diaryFont);
      formData.append('diaryFontSize', diaryTextSize);
      console.log(...formData);
      await updateDiaryOne(formData);
      setUpdateDiary(false);
      setIsModal(true);
      setIsValid(true);
    } catch (error) {
      console.error('일기 수정 오류', error);
      setMessage('일기 수정에 실패했습니다. 다시 시도해주세요');
      setIsValid(false);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-[#EEE4DB] w-[full] h-[117px] shadow-md flex justify-center text-[15px] ">
        <div className="flex flex-row justify-between items-center w-[1438px]">
          <button
            type="button"
            onClick={() => document.getElementById('fileInput').click()}
            className="transform scale-75 bg-btnColor hover:bg-btnColorActive border-[#98928C] border w-[103px] h-[116px] rounded-[14px] ml-[203px] flex flex-col justify-center items-center gap-[13.5px] cursor-pointer"
          >
            <img src={img}></img>
            <p>사진</p>
          </button>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
            multiple
          />
          <div className="flex flex-row gap-[20px] mr-[30px] transform scale-75">
            {(!updateDiary || (updateDiary && temporaryDiary)) && (
              <button className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-row items-center justify-center">
                <div
                  onClick={CheckDraftDiary}
                  className="flex flex-col items-center gap-[13.5px] "
                >
                  <img src={temporary} className="w-[35px] h-[35px]"></img>
                  <p>임시저장</p>
                </div>
                <div className="border-l-[1.5px] border-[#b3b3b3] rounded-md  h-16 mx-4"></div>
                <div
                  onClick={isTemporaryStorageModal}
                  className=" font-medium text-[25px] ml-[10px]"
                >
                  {draftDiaryNum}
                </div>
              </button>
            )}

            <button
              onClick={handleDiarySave}
              className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col justify-center items-center gap-[13.5px]"
            >
              <img src={save}></img>
              <p>저장하기</p>
            </button>
            <button
              onClick={setTemplateOn}
              className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col items-center justify-center gap-[13.5px]"
            >
              <img src={showTemplate}></img>
              <p>템플릿보기</p>
            </button>
          </div>
        </div>
      </div>
      <TemporaryStorage
        isTemporaryStorageModal={isTemporaryStorageModal}
        temporaryStorageModal={temporaryStorageModal}
      />
      <GotoAnalysis
        selectedDate={selectedDate}
        gotoAnalysisEmotionModal={gotoAnalysisEmotionModal}
        setGotoAnalysisEmotionModal={setGotoAnalysisEmotionModal}
      />
      {isModal && (
        <SaveModal
          handleButtonClick={handleButtonClick}
          setIsModal={setIsModal}
          isValid={isValid}
          message={message}
          diary={true}
        />
      )}
      {isTemporaryModal && (
        <TemporaryModal
          setIsTemporaryModal={setIsTemporaryModal}
          handleButtonClick={handleTemporaryClick}
        />
      )}
    </>
  );
};

export default TopBar;
