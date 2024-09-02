import React from 'react';
import Card from './Card';
import useUserStore from '../../store/userStore';
import { quddies } from '../../constants/QuddyList';
import happyQuddy from '@assets/happyQuddy.svg';
import { useNavigate } from 'react-router-dom';

const RankingCard = () => {
  const navigate = useNavigate();
  const userInfo = useUserStore((state) => ({
    diaryEmotion: state.diaryEmotion,
    maxEmotionNum: state.maxEmotionNum,
  }));
  const { diaryEmotion, maxEmotionNum } = userInfo;

  const quddy = quddies.find((quddy) => quddy.emotion === diaryEmotion);

  const quddyImgSrc = quddy ? quddy.imgSrc : happyQuddy;
  const quddyName = quddy ? quddy.name : '행복쿼디';
  const quddyAlt = quddy ? quddy.emotion : 'happy';
  const quddyColor = quddy ? quddy.color : '#D8B18E';

  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex px-2 items-center">
          <h1 className="text-3xl font-bold">1위 쿼디</h1>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          {maxEmotionNum
            ? '현재 1순위 감정 쿼디예요.'
            : '일기를 작성하고 랭킹을 확인해보세요 !'}
        </div>

        <div className="flex flex-col items-center mt-8 gap-3">
          <img
            onClick={() => navigate('/mypage/myActivity')}
            src={quddyImgSrc}
            alt={quddyAlt}
            className="w-[193px] h-[204px] cursor-pointer"
          />
          <p
            className="font-meetme text-3xl mb-2"
            style={{ color: quddyColor }}
          >
            {quddyName}
          </p>
          <h1 className="text-4xl font-medium">
            {maxEmotionNum ? maxEmotionNum : 0} 회
          </h1>
        </div>
      </div>
    </Card>
  );
};

export default RankingCard;
