import { useEffect, useState } from 'react';
import down from '../../../../public/icon/dropdown.svg';

const Dropdown = ({ initState, onChangeState }) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);
  const [dropdownView, setDropdownView] = useState(false);
  const [selectedYear, setSelectedYear] = useState(initState);

  useEffect(() => {
    if (dropdownView) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 100),
      );
    }
  }, [dropdownView]);

  const handleClickDropdown = () => {
    setDropdownView(!dropdownView);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    onChangeState(value);
    setDropdownView(false);
  };

  return (
    <div>
      <button
        className="mt-[5px] flex gap-[10px] justify-center items-center border-[1px] border-stone-400 rounded-[7px] px-[20px] text-[25px] font-medium"
        onClick={handleClickDropdown}
      >
        <span>{selectedYear}</span>
        {dropdownView ? (
          <img src={down} />
        ) : (
          <img src={down} className="transform rotate-180" />
        )}
      </button>
      {visibilityAnimation && (
        <ul className="justify-center items-center border-[1px] border-stone-400 rounded-[7px] px-[20px] text-[25px] font-medium ">
          {[...Array(7).keys()].map((i) => {
            const year = (new Date().getFullYear() + i).toString();
            return (
              <li
                key={year}
                className="hover:text-[#d8b18e] cursor-pointer"
                onClick={() => handleYearChange(year)}
              >
                {year}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
