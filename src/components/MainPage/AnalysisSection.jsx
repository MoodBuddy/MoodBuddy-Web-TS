import nameCover from '@assets/nameCover.svg';
import sketchBackground from '@assets/sketchBackground.png';
import CountCard from './CountCard';
import ProfileCard from './ProfileCard';
import RankingCard from './RankingCard';
import useUserStore from '../../store/userStore';

const AnalysisSection = () => {
  const userInfo = useUserStore((state) => ({
    nickname: state.nickname,
  }));
  const nickname = userInfo.nickname;

  return (
    <>
      {/* 상단 여백 색상 */}
      <div className="bg-[#E8DBCF]"></div>

      <div
        className="grid bg-[#E8DBCF] bg-cover bg-center h-[947px]"
        style={{ backgroundImage: `url(${sketchBackground})` }}
      >
        {/* 사용자별 문구 */}
        <div className="flex items-center justify-center mt-44 mb-10 relative transform scale-90">
          <img src={nameCover} alt="nameCover" className="absolute" />
          {nickname ? (
            <h1 className="z-10 font-meetme text-5xl">
              {nickname} 님의 하루를 기록해봐요 !
            </h1>
          ) : (
            <h1 className="z-10 font-meetme text-5xl">
              프로필을 설정하고 기록을 확인해봐요 !
            </h1>
          )}
        </div>

        {/* 카드 */}
        <div className="flex gap-4 items-center justify-center mb-20 trnasform scale-90">
          <ProfileCard />
          <CountCard />
          <RankingCard />
        </div>
      </div>
    </>
  );
};

export default AnalysisSection;
