import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../../apis/user';

const TypeStats = ({ data }) => {
  const quddyTI = data?.quddyTIType ? data.quddyTIType : '';

  const {
    isError,
    data: profile,
    error,
  } = useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });

  if (!profile) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error('Error fetching user info:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  return (
    <div className="bg-white rounded-[30px] border-2 border-black my-12 p-10">
      {data ? (
        <>
          <h1 className="font-meetme text-[#503D2D] text-6xl mb-5">
            {profile.nickname}님은 " {quddyTI} 유형 "
          </h1>
          <p className="font-meetme text-2xl text-center text-opacity-60 text-[#513D2E]">
            이번달의 {profile.nickname}님은 즉흥적이고 감정적인 일기주제로{' '}
            <br />
            기록하였고, 행복한 삶이 가득하네요 !
          </p>
        </>
      ) : (
        <>
          <h1 className="font-meetme text-[#503D2D] text-6xl mb-5">
            아직 유형을 분석할 수 없어요
          </h1>
          <p className="font-meetme text-2xl text-center text-opacity-60 text-[#513D2E]">
            {profile.nickname}님! 이번 달 일기를 꾸준히 작상하고 QuddyTI를
            알아보세요 ! <br />
          </p>
        </>
      )}
    </div>
  );
};

export default TypeStats;
