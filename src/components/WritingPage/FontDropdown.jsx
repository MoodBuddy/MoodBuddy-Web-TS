import { useState } from 'react';
import down from '../../../public/icon/arrowDown.svg';
import Dropdown from './Dropdown';
import useFontStore from '../../store/fontStore';
const FontDropdown = () => {
  const [DropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState('Inter');
  const { setFont } = useFontStore();

  const handleClickDropdown = () => {
    setDropdownView(!DropdownView);
  };

  const onChangeState = (value) => {
    setInitState(value);
    setFont(value);
    setDropdownView(false);
  };
  return (
    <div>
      <button
        onClick={handleClickDropdown}
        className="flex justify-between items-center p-5 w-[150px] h-[40px] bg-[#E8DBCF] rounded-[10px]"
      >
        <span className="font-[600] text-xl">{initState}</span>
        <img src={down} />
      </button>
      <Dropdown visiblity={DropdownView}>
        <ul className="text-xl flex flex-col gap-[5px] px-5 py-2  w-[150px]  bg-[#E8DBCF] rounded-[10px] ">
          <li className="cursor-pointer" onClick={() => onChangeState('Inter')}>
            Inter
          </li>
          <li
            className="cursor-pointer border-t-[1px] border-gray-500/80 pt-1"
            onClick={() => onChangeState('meetme')}
          >
            meetme
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};
export default FontDropdown;
