import { useState, useEffect, useRef } from 'react';
import Weather from './Weather';
import Template from './Template';
import useTitleStore from '../../store/titleStore';
import useDiaryImgStore from '../../store/diaryImgStore';
import close from '../../../public/icon/blackClose.svg';
import useDiaryImgFileStore from '../../store/diaryImgFileStore';
import useDiaryContentStore from '../../store/diaryContentStore';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import useUpdateDiaryStore from '../../store/updateDiaryStore';
import useweatherStore from '../../store/weatherStore';
import ImageModal from '../DiaryPage/ImageModal';
import useDiaryDateStore from '../../store/diaryDateStore';
import useDiaryKeepImgUrlStore from '../../store/diaryKeepImgUrlStore';
import FontDropdown from './FontDropdown';
import useFontStore from '../../store/fontStore';
import TextSizeDropdown from './TextSizeDropdown';
import useTextSizeStore from '../../store/textSizeStore';
import useCalendarClickStore from '../../store/calendarClick';

const Diary = ({ selectedDate, templateOn, setTemplateOn }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const { title, setTitle } = useTitleStore();
  const { content, setContent, addTemplate } = useDiaryContentStore();
  const { diaryImg, setDiaryImg } = useDiaryImgStore();
  const { setImageFiles, removeImageFile } = useDiaryImgFileStore();
  const { updateDiary } = useUpdateDiaryStore();
  const { setSelectedOption } = useweatherStore();
  const [imgModal, setImgModal] = useState(false);
  const [imgSource, setImgSource] = useState('');
  const { diaryDate } = useDiaryDateStore();
  const { setDiaryKeepImg } = useDiaryKeepImgUrlStore();
  const { font, setFont } = useFontStore();
  const { textSize, setTextSize } = useTextSizeStore();
  const diaryDateValue = new Date(diaryDate);
  const isValidDate = !isNaN(diaryDateValue);
  const { calendarClick } = useCalendarClickStore();
  const updateDate = format(
    isValidDate ? diaryDateValue : new Date(),
    'yyyy년 MM월 dd일 EEEE',
    { locale: ko },
  );

  const formattedDate = format(new Date(), 'yyyy년 MM월 dd일 EEEE', {
    locale: ko,
  });
  const formattedCalendarDate = format(
    new Date(selectedDate),
    'yyyy년 MM월 dd일 EEEE',
    {
      locale: ko,
    },
  );

  const handleTemplate = () => {
    setTemplateOn(!templateOn);
  };
  useEffect(() => {
    return () => {
      setTitle('');
      setContent('');
      setSelectedOption(null);
      setDiaryImg([]);
      setImageFiles([]);
      removeImageFile([]);
      setFont('Inter');
      setTextSize('24px');
      console.log(`수정? ${updateDiary}`);
    };
  }, []);

  // useEffect(() => {
  //   console.log(updateDiary);
  //   if (!updateDiary) {
  //     setTitle('');
  //     setContent('');
  //     setDiaryImg([]);
  //     console.log(diaryImg);
  //   }
  // }, []);

  useEffect(() => {
    if (selectedTemplate) {
      addTemplate(selectedTemplate);
    }
  }, [selectedTemplate]);

  const handleImageRemove = (indexToRemove) => {
    const newDiaryImg = diaryImg.filter((_, index) => index !== indexToRemove);
    setDiaryImg(newDiaryImg);
    setDiaryKeepImg(newDiaryImg);
    removeImageFile(indexToRemove);
  };

  const handleImgModal = (imageUrl) => {
    console.log(imgModal);
    setImgSource(imageUrl);
    setImgModal(!imgModal);
  };
  return (
    <>
      <div className="flex relative top-[-203.5px] transform scale-75 mb-[-415px]">
        <div className="z-10 w-[1174px] h-[1534px] bg-[#F7F3EF] mb-[80px] rounded-b-[36px]">
          <div className="flex flex-row justify-between items-center items-center ml-[121px] mr-[45px] mt-[149px]">
            <div className="flex flex-col gap-[41px]">
              <div className="text-[25px]">
                {updateDiary
                  ? updateDate
                  : calendarClick
                    ? formattedCalendarDate
                    : formattedDate}
              </div>
              <input
                type="text"
                className="font-meetme text-[75px] bg-[#F7F3EF] outline-none"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row gap-[16px] mb-[25px]">
              <div className="text-[24px]">날씨</div>
              <div>
                <Weather></Weather>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#BABABA]/400 mt-[52px] "></div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex gap-3 relative right-[-385px] top-[-50px]">
              <FontDropdown />
              <TextSizeDropdown />
            </div>
            <div className="flex flex-row w-[900px] overflow-x-auto custom-scrollbar gap-[30px]">
              {diaryImg.map((imageUrl, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Diary Image ${index}`}
                    onClick={() => handleImgModal(imageUrl)}
                    className="w-[300px] h-[300px]  object-cover"
                  />
                  <button
                    className="absolute top-0 right-[-25px] rounded-[10px] px-1 py-1 flex justify-center items-center"
                    onClick={() => handleImageRemove(index)}
                  >
                    <img src={close} />
                  </button>
                </div>
              ))}
            </div>
            <textarea
              type="text"
              className={`font-${font} my-[70px] font-light text-[${textSize}] leading-[50px] bg-[#F7F3EF] outline-none w-[955px] ${diaryImg.length ? 'h-[500px]' : 'h-[931px]'}  overflow-y-auto custom-scrollbar `}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder={`오늘의 하루를 정리하기 위해 온 당신! 
오늘 하루도 수고 많았어요.
오늘 하루도 행복하게 마무리 해볼까요? 
오늘 어떤 일이 있었는지, 기록하고 싶은 이야기는 무엇인지 솔직하게 적어보세요. 
일기 작성이 어렵다면, 질문 템플릿을 이용해 다양한 생각을 적어볼 수 있어요. 
일기 작성 후 저장하기를 누르면, 쿼디가 감정을 분석해줘요 !`}
            />
          </div>
        </div>
        <Template
          selectedTemplate={selectedTemplate}
          templateOn={templateOn}
          setTemplateOn={handleTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
      <ImageModal
        imgModal={imgModal}
        setImgModal={setImgModal}
        imgSource={imgSource}
      />
    </>
  );
};
export default Diary;
