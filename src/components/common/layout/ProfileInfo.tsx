import { useNavigate } from 'react-router-dom';
import useTemporaryDiaryStore from '../../../store/temporaryDiaryStore';
import useUpdateDiaryStore from '../../../store/updateDiaryStore';
import useCalendarClickStore from '../../../store/calendarClick';

const ProfileInfo = ({ data }) => {
  const navigate = useNavigate();
  const { setCalendarClick } = useCalendarClickStore();
  const { setUpdateDiary } = useUpdateDiaryStore();
  const { setTemporaryDiary } = useTemporaryDiaryStore();
  const handleLogout = () => {
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('i');
    navigate('/');
  };

  const handleMyPage = () => {
    setCalendarClick(false);
    setUpdateDiary(false);
    setTemporaryDiary(false);

    navigate('/mypage/editProfile');
  };

  return (
    <div className=" absolute flex top-[68px] right-[-40px] mt-2 w-[340px] bg-[#F8EFE8] border border-[#B98D6D] shadow-lg z-20 rounded-xl p-4">
      <div onClick={handleMyPage}>
        <img
          src={data.url}
          alt="profileImgURL"
          className="relative w-[70px] h-[70px] rounded-full top-1 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-start ml-4">
        <div className="flex items-center text-ellipsis overflow-hidden w-28">
          <p
            div
            onClick={handleMyPage}
            className="text-[22px] font-bold overflow-hidden text-ellipsis cursor-pointer"
          >
            {data.nickname}
          </p>
          <p className="text-[22px]">님</p>
        </div>
        <p className="text-sm font-light">{data.birthday}</p>
        <p className="mt-1 text-ellipsis overflow-hidden w-[150px]">
          {data.profileComment}
        </p>
      </div>
      <div>
        <button
          className="bg-white border border-[#C5C5C5] py-1 px-2 relative right-4 text-sm"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
