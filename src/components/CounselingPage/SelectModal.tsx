import halfHappyQuddy from '@assets/halfHappyQuddy.svg';
import Button from '../common/button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useContentStore from '../../store/contentStore';
import { postLetter } from '../../apis/letter';
import FakeTimer from './FakeTimer';
import close from '../../../public/icon/close.svg';

const SelectModal = ({ sending, setSending }) => {
  const { content } = useContentStore();
  const [selectedFormat, setSelectedFormat] = useState(null);

  const navigate = useNavigate();

  const handleFormatSelection = async (format) => {
    setSelectedFormat(format);
    setSending(false);

    try {
      const today = new Date();
      today.setTime(today.getTime() + 9 * 60 * 60 * 1000);
      const todayUTC = today.toISOString();
      console.log(todayUTC);

      const letterData = {
        letterFormat: format,
        letterWorryContent: content,
        letterDate: todayUTC,
      };
      console.log(letterData);

      const response = await postLetter(letterData);

      if (response) {
        navigate('/counseling/completedWriting');
      } else {
        console.error('데이터 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => {
    setSending(false);
  };

  return (
    <>
      {sending ? (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[900px] h-[600px] rounded-[60px] bg-lightbeige transform scale-75">
            <div className="flex flex-col items-center">
              <img
                src={close}
                onClick={handleClose}
                className="cursor-pointer absolute top-8 right-10 w-7 h-7"
              />
              <div className="font-meetme text-[49px] text-center mt-[60px]">
                쿼디에게 <br /> 어떤 답장을 받고 싶나요?
              </div>
              <img
                className="mt-[20px] w-[290px] h-[218px]"
                src={halfHappyQuddy}
              />
              <div className="flex mt-[31px] gap-[8px]">
                <Button
                  onClick={() => handleFormatSelection(1)}
                  className="w-[300px] h-[58px] font-semibold text-[22px]"
                >
                  따뜻한 위로의 말
                </Button>

                <Button
                  onClick={() => handleFormatSelection(0)}
                  className="bg-beige w-[300px] h-[58px] font-semibold text-[22px]"
                >
                  따끔한 해결의 말
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : selectedFormat !== null ? (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[900px] h-[600px] rounded-[60px] bg-lightbeige transform scale-75">
            <div className="flex flex-col justify-center items-center">
              <div className="font-meetme text-[78px] text-center mt-[88px]">
                고민 전송 완료 !
              </div>
              <div className="text-[30px] mb-[30px]">30초 뒤에 답장이 와요</div>
              <FakeTimer hh={'00'} mm={'00'} ss={'30'} />

              <Button
                onClick={() => navigate('/counseling/completedWriting')}
                className="w-[300px] h-[58px] font-semibold text-[27px] mt-[59px]"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SelectModal;
