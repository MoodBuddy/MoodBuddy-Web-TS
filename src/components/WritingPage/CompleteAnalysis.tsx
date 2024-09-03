import { useLocation, useNavigate } from 'react-router-dom';
import { EmotionQuddyList } from '../../constants/EmotionQuddyList';
import { diaryDescription, saveDiary, updateDiaryOne } from '../../apis/diary';
import useTitleStore from '../../store/titleStore';
import useDiaryContentStore from '../../store/diaryContentStore';
import useweatherStore from '../../store/weatherStore';
import useDiaryImgFileStore from '../../store/diaryImgFileStore';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import useDiaryItemIdStore from '../../store/diaryItemIdStore';
import useSpeechBubble from '../../store/speechBubbleStore';
import { ko } from 'date-fns/locale';
import ModalLoadingSpinner from '../common/loading/ModalLoadingSpinner';
import Button from '../common/button/Button';
import useTemporaryDiaryStore from '../../store/temporaryDiaryStore';
import useDiaryKeepImgUrlStore from '../../store/diaryKeepImgUrlStore';
import useCalendarStore from '../../store/calendarStore';
import useFontStore from '../../store/fontStore';
import useTextSizeStore from '../../store/textSizeStore';
import useDiaryDateStore from '../../store/diaryDateStore';
import useCalendarClickStore from '../../store/calendarClick';

const CompleteAnalysis = ({ selectedDate, completeAnaylsis }) => {
  const { title } = useTitleStore();
  const { content } = useDiaryContentStore();
  const { selectedOption } = useweatherStore();
  const { imageFiles } = useDiaryImgFileStore();
  const { diaryKeepImg } = useDiaryKeepImgUrlStore();
  const [comment, setComment] = useState('');
  const [emotion, setEmotion] = useState('');
  const [item, setItem] = useState('');
  const { diaryItemId, setDiaryItemId } = useDiaryItemIdStore();
  const { setSpeechBubble } = useSpeechBubble();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { temporaryDiary, setTemporaryDiary } = useTemporaryDiaryStore();
  const { selectDate } = useCalendarStore();
  const { font } = useFontStore();
  const { textSize } = useTextSizeStore();
  const [diaryFont, setDiaryFont] = useState('');
  const [diaryTextSize, setDiaryTextSize] = useState('');
  const { diaryDate } = useDiaryDateStore();
  const { calendarClick } = useCalendarClickStore();

  const formattedDate = format(new Date(), 'yy.MM.dd (E)', {
    locale: ko,
  });

  const formattedDiaryDate = format(new Date(diaryDate), 'yy.MM.dd (E)', {
    locale: ko,
  });

  const formattedCalendarDate = format(new Date(selectedDate), 'yy.MM.dd (E)', {
    locale: ko,
  });

  const today = new Date();
  today.setTime(today.getTime() + 9 * 60 * 60 * 1000); // 9시간 추가
  const todayUTC = today.toISOString();
  const currentDate = todayUTC.slice(0, -14);

  useEffect(() => {
    console.log(`selectedDate : ${selectedDate}`);
    console.log(font);
    console.log(textSize);
    console.log(temporaryDiary);
    console.log(calendarClick);
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
  useEffect(() => {
    console.log(diaryDate);
  }, []);

  useEffect(() => {
    if (completeAnaylsis) {
      const result = async () => {
        console.log(temporaryDiary);

        await isCompleteSave();

        setTemporaryDiary(false);
        await getDescription();
      };
      result();
    }
  }, [completeAnaylsis, diaryFont, diaryTextSize]);

  const getDescription = async () => {
    try {
      const res = await diaryDescription();

      console.log(res);
      setComment(res.data.comment);
      setEmotion(res.data.emotion);
      setLoading(false);
      console.log(emotion);

      return res;
    } catch (error) {
      console.error('일기 description 오류 : ', error);
    }
  };
  useEffect(() => {
    if (emotion) {
      const quddy = EmotionQuddyList.find((it) => it.emotion === emotion);
      setItem(quddy);
    }
  }, [emotion]);

  const isCompleteSave = async () => {
    try {
      const formData = new FormData();

      formData.append('diaryTitle', title);
      formData.append(
        'diaryDate',
        temporaryDiary
          ? diaryDate
          : calendarClick
            ? selectedDate
            : todayUTC.slice(0, -14),
      );
      formData.append('diaryContent', content);
      formData.append('diaryWeather', selectedOption);
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('diaryImgList', imageFiles[i]);
      }
      formData.append('diaryFont', diaryFont);
      formData.append('diaryFontSize', diaryTextSize);

      console.log(...formData);
      const res = await saveDiary(formData);
      console.log(res);
      const diaryId = res.data.data.diaryId;
      console.log(diaryId);
      setDiaryItemId(diaryId);
    } catch (error) {
      console.error('일기 저장 오류', error);
    }
  };

  const isSave = () => {
    setSpeechBubble(true);
    selectDate(currentDate);
    if (diaryItemId) {
      navigate(`/diary/${diaryItemId}`);
    }
  };

  return (
    <>
      {completeAnaylsis && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          {loading ? (
            <ModalLoadingSpinner />
          ) : (
            <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
              <div className="flex flex-col items-center gap-[5px] ">
                <div className="w-[600px] flex items-center justify-center relative">
                  <div className="font-meetme font-bold text-[25px] mx-auto mt-[60px] whitespace-pre-wrap text-center leading-9 absolute bottom-[-110px]">
                    {comment}
                  </div>
                </div>
                <div className="flex flex-col items-center absolute top-[120px]">
                  <div className="text-[18px] font-medium relative top-[10px]">
                    {temporaryDiary
                      ? formattedDiaryDate
                      : calendarClick
                        ? formattedCalendarDate
                        : formattedDate}
                  </div>
                  <div className="flex flex-col gap-[5px] justify-center items-center ">
                    <img
                      className="transform scale-75 w-[182px] h-[193px]"
                      src={item.imgSrc}
                    />
                    <div
                      className="text-[25px] font-meetme relative top-[-20px]"
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={isSave}
                  className="ml-auto mr-[25px] absolute bottom-[20px] right-[10px]  w-[120px]"
                >
                  <p className="">저장하기</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default CompleteAnalysis;
