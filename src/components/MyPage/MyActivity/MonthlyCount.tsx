const MonthlyCount = ({ month, count }) => {
  return (
    <>
      <div className="flex gap-[50px] justify-between items-center">
        <div className="text-[#858585] text-[23px]">{month}</div>
        <span className="text-black text-[35px]">{count}</span>
        <span className="text-[#676767] text-[23px]">회</span>
      </div>
    </>
  );
};
export default MonthlyCount;
