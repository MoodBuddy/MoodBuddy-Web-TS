import happyQuddy from '@assets/happyQuddy.svg';

const CounselingLetterTopBar = () => {
  return (
    <div className='transform scale-[85%]'>
      <div className='flex items-center gap-[30px] w-[1570px] h-[95px] transform scale-75 mt-8 mb-4 ml-10'>
        <img
          src={happyQuddy}
          alt='happyQuddy'
          className='w-[125px] h-[127px]'
        />
        <div className='font-meetme text-[70px] '>
          우리가 주고 받은 편지에요!
        </div>
      </div>
    </div>
  );
};

export default CounselingLetterTopBar;
