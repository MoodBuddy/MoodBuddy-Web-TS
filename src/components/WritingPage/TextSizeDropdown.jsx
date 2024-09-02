import { useState } from 'react';
import down from '../../../public/icon/arrowDown.svg';
import Dropdown from './Dropdown';
import useTextSizeStore from '../../store/textSizeStore';
const TextSizeDropdown = () => {
  const [DropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState('24px');
  const { setTextSize } = useTextSizeStore();

  const handleClickDropdown = () => {
    setDropdownView(!DropdownView);
  };

  const onChangeState = (value) => {
    setInitState(value);
    setTextSize(value);
    setDropdownView(false);
  };
  return (
    <div>
      <button
        onClick={handleClickDropdown}
        className="flex justify-between items-center p-5 w-[150px] h-[40px] bg-[#E8DBCF]  rounded-[10px]"
      >
        <span className="font-[600] text-xl ">{initState}</span>
        <img src={down} />
      </button>
      <Dropdown visiblity={DropdownView}>
        <ul className="text-xl flex flex-col gap-[5px] px-5 py-2  w-[150px] bg-[#E8DBCF] rounded-[10px] ">
          <li className="cursor-pointer" onClick={() => onChangeState('24px')}>
            24px
          </li>
          <li
            className="cursor-pointer border-t-[1px] border-gray-500/80 pt-1"
            onClick={() => onChangeState('28px')}
          >
            28px
          </li>
          <li
            className="cursor-pointer border-t-[1px] border-gray-500/80 pt-1"
            onClick={() => onChangeState('30px')}
          >
            30px
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};
export default TextSizeDropdown;
