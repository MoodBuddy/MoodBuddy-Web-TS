import MailBoxContent from './MailBoxContent';

const MailBox = ({ letters }) => {
  return (
    <div className='w-[1180px] h-[736px] bg-[#F7F3EF] rounded-[20px] border border-black'>
      <div className='h-[1005px] py-8 px-6 overflow-y-auto overflow-x-hidden custom-scrollbar'>
        {letters && letters.length > 0 ? (
          letters.map((letter) => (
            <MailBoxContent key={letter.letterId} letter={letter} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MailBox;
