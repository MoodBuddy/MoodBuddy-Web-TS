import { useEffect } from 'react';
import useweatherStore from '../../store/weatherStore';
import clear from '../../../public/icon/sunIcon.svg';
import cloudy from '../../../public/icon/cloudIcon.svg';
import rain from '../../../public/icon/rainIcon.svg';
import snow from '../../../public/icon/snowIcon.svg';

const Weather = () => {
  const { selectedOption, setSelectedOption } = useweatherStore();
  useEffect(() => {
    setSelectedOption('CLEAR');
  }, []);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const optionClass = (option) => {
    return `flex justify-center items-center  text-[18px]  w-[97px] h-[30px] rounded-[20px] hover:bg-white hover:font-bold ${selectedOption == option ? 'bg-white font-bold' : 'font-normal'} `;
  };
  return (
    <>
      <div className="bg-[#E8DBCF] w-[119px] h-[158px] rounded-[20px] flex flex-col justify-evenly items-center cursor-pointer">
        <div
          onClick={() => handleOptionClick('CLEAR')}
          className={optionClass('CLEAR')}
        >
          <img src={clear} className="w-7 h-7" />
        </div>
        <div
          onClick={() => handleOptionClick('CLOUDY')}
          className={optionClass('CLOUDY')}
        >
          <img src={cloudy} className="w-7 h-7" />
        </div>
        <div
          onClick={() => handleOptionClick('RAIN')}
          className={optionClass('RAIN')}
        >
          <img src={rain} className="w-7 h-7" />
        </div>
        <div
          onClick={() => handleOptionClick('SNOW')}
          className={optionClass('SNOW')}
        >
          <img src={snow} className="w-7 h-7" />
        </div>
      </div>
    </>
  );
};
export default Weather;
