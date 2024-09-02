import { useState, useEffect } from 'react';
import { setHours, setMinutes, format } from 'date-fns';

const TimePicker = ({ onTimeChange, initialTime }) => {
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  const periods = ['AM', 'PM'];

  useEffect(() => {
    if (initialTime) {
      const [hour, minute] = initialTime.split(':').map(Number);
      const isPM = hour >= 12;
      const adjustedHour = hour % 12 || 12;

      setSelectedHour(adjustedHour);
      setSelectedMinute(minute);
      setSelectedPeriod(isPM ? 'PM' : 'AM');
    }
  }, [initialTime]);

  const handleTimeChange = (hour, minute, period) => {
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }

    const newTime = setMinutes(setHours(new Date(), hour), minute);
    const formattedTime = format(newTime, 'HH:mm');
    onTimeChange(formattedTime);
  };

  const handleHourChange = (e) => {
    const newHour = parseInt(e.target.value, 10);
    setSelectedHour(newHour);
    handleTimeChange(newHour, selectedMinute, selectedPeriod);
  };

  const handleMinuteChange = (e) => {
    const newMinute = parseInt(e.target.value, 10);
    setSelectedMinute(newMinute);
    handleTimeChange(selectedHour, newMinute, selectedPeriod);
  };

  const handlePeriodChange = (e) => {
    const newPeriod = e.target.value;
    setSelectedPeriod(newPeriod);
    handleTimeChange(selectedHour, selectedMinute, newPeriod);
  };

  return (
    <div className="flex">
      <select
        value={selectedPeriod}
        onChange={handlePeriodChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D8B18E] focus:border-[#D8B18E] w-[100px] p-2.5"
      >
        {periods.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>
      <select
        value={selectedHour}
        onChange={handleHourChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D8B18E] focus:border-[#D8B18E] w-[100px] p-2.5"
      >
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <select
        value={selectedMinute}
        onChange={handleMinuteChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D8B18E] focus:border-[#D8B18E] w-[100px] p-2.5"
      >
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute.toString().padStart(2, '0')}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
