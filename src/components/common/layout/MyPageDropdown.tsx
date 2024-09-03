import { NavLink } from 'react-router-dom';
import useUpdateDiaryStore from '../../../store/updateDiaryStore';
import useTemporaryDiaryStore from '../../../store/temporaryDiaryStore';
import useCalendarClickStore from '../../../store/calendarClick';

const MyPageDropdown = ({ subMenu }) => {
  const { setUpdateDiary } = useUpdateDiaryStore();
  const { setTemporaryDiary } = useTemporaryDiaryStore();
  const { setCalendarClick } = useCalendarClickStore();

  const handleDropDown = () => {
    setTemporaryDiary(false);
    setCalendarClick(false);
    setUpdateDiary(false);
    navigate(to);
  };
  return (
    <div className="absolute z-20 top-[75px] left-[-25px] w-max h-[157px] bg-[#E8DBCF] border border-[#B98D6D]">
      <div className="flex flex-col items-start p-2">
        {subMenu.map((item, index) => (
          <NavLink
            onClick={(event) => handleDropDown(event, item.to)}
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? 'text-[#B98D6D] py-1 px-4 '
                : 'hover:text-[#B98D6D] transition-colors duration-75 py-1 px-4 '
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MyPageDropdown;
