import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getFindOne } from '../../apis/diary';
import { formatWeather, formatQuddyByEmotion } from '../../utils/format';
import SimilarModal from './SimilarModal';
import EditBar from './EditBar';
import happyBubble from '../../../public/image/happyBubble.svg';
import useSpeechBubbleStore from '../../store/speechBubbleStore';
import ImageModal from './ImageModal';
import prevIcon from '../../../public/icon/prevBoldIcon.svg';
import useTemporaryDiaryStore from '../../store/temporaryDiaryStore';

const DiarySection = ({ diaryId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { speechBubble, setSpeechBubble } = useSpeechBubbleStore();
  const { temporaryDiary, setTemporaryDiary } = useTemporaryDiaryStore();

  const [imgModal, setImgModal] = useState(false);
  const [imgSource, setImgSource] = useState('');
  const [diaryFont, setDiaryFont] = useState('');
  const [diaryTextSize, setDiaryTextSize] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`temporary? ${temporaryDiary} `);
  }, []);
  const {
    isError,
    data: diary,
    error,
  } = useQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => getFindOne(diaryId),
    enabled: !!diaryId,
  });

  useEffect(() => {
    console.log(diary.diaryFont);
    console.log(diary.diaryFontSize);
    if (diary.diaryFont === 'MEETME') {
      setDiaryFont('meetme');
    } else {
      setDiaryFont('Inter');
    }
    if (diary.diaryFontSize === 'PX24') {
      setDiaryTextSize('24px');
    } else {
      if (diary.diaryFontSize === 'PX28') {
        setDiaryTextSize('28px');
      } else {
        setDiaryTextSize('30px');
      }
    }
    console.log(diaryFont);
    console.log(diaryTextSize);
  }, [diary.diaryFont, diary.diaryFontSize]);

  if (isError) {
    console.error('Error fetching diary:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  if (!diary) {
    return <div>일기를 찾을 수 없습니다.</div>;
  }

  const formattedDate = format(
    new Date(diary.diaryDate),
    'yyyy년 MM월 dd일 EEEE',
    {
      locale: ko,
    },
  );

  useEffect(() => {
    return () => setSpeechBubble(false);
  }, []);

  const formattedWeather = formatWeather(diary.diaryWeather);
  const { imgSrc, bubbleSrc, name, color } = formatQuddyByEmotion(
    diary.diaryEmotion,
  );
  console.log(color);
  const handleImgModal = (imageUrl) => {
    console.log(imgModal);
    setImgSource(imageUrl);
    setImgModal(!imgModal);
  };
  return (
    <div>
      {/* 상단바 */}
      <EditBar diaryId={diaryId} />

      {/* 뒤로가기 버튼 */}
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-[-45px] top-[48px]"
        >
          <img src={prevIcon} alt="prevIcon" className="w-[18px]" />
        </button>
      </div>

      {/* 일기 세부내용 */}
      <div className="bg-[#F7F3EF] w-[1080px] h-full rounded-[36px] px-16 py-12 mb-16 ">
        <div className="flex justify-between relative">
          <div>
            <h1 className="font-meetme text-5xl font-bold mb-4 w-[550px] whitespace-normal break-words">
              {diary.diaryTitle}
            </h1>

            <div className="flex items-center gap-6 mb-20">
              <p className="text-lg">{formattedDate}</p>
              <p className="text-lg">날씨</p>
              <img
                className="w-5 h-5 -ml-4"
                src={formattedWeather}
                alt="formatWeather"
              />
            </div>
          </div>
          {!temporaryDiary ? (
            speechBubble ? (
              <div>
                <div className="mr-40 mb-6">
                  <img
                    src={imgSrc}
                    alt={imgSrc}
                    className="w-[150px] h-[170px]"
                  />
                  <p
                    style={{ color: color }}
                    className="font-meetme text-center text-2xl text-[#D8B18E]"
                  >
                    {name}
                  </p>
                </div>

                {/* 비슷한 추억보기 모달 */}
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-[25%] right-[-220px] cursor-pointer"
                >
                  <img src={bubbleSrc} alt="bubbleSrc" className="w-[90%]" />
                </div>
              </div>
            ) : (
              <>
                <div className="mr-12 mb-6">
                  <img
                    src={imgSrc}
                    alt={imgSrc}
                    className="w-[150px] h-[170px]"
                  />
                  <p
                    style={{ color: color }}
                    className="font-meetme text-center text-2xl text-[#D8B18E]"
                  >
                    {name}
                  </p>
                </div>
              </>
            )
          ) : (
            <></>
          )}
        </div>

        <div className="h-[1px] my-3 w-full bg-stone-300" />

        {diary.diaryImgList && diary.diaryImgList.length > 0 ? (
          <div className="flex overflow-x-auto custom-scrollbar gap-[30px] ">
            {diary.diaryImgList.map((imgUrl, index) => (
              <img
                onClick={() => handleImgModal(imgUrl)}
                key={index}
                src={imgUrl}
                alt={`Diary Image ${index}`}
                className="w-[300px] h-[300px] object-cover"
              />
            ))}
          </div>
        ) : (
          <></>
        )}
        <p
          className={`font-${diaryFont} text-[${diaryTextSize}] my-10 whitespace-normal break-words`}
        >
          {diary.diaryContent}
        </p>
      </div>

      {isModalOpen && (
        <SimilarModal
          emotion={diary.diaryEmotion}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <ImageModal
        imgModal={imgModal}
        setImgModal={setImgModal}
        imgSource={imgSource}
      />
    </div>
  );
};

export default DiarySection;
