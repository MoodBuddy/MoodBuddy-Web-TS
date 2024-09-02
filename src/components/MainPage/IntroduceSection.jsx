import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@styles/slick.css';
import banner_1 from '@assets/banner/banner_1.svg';
import banner_1_1_1 from '@assets/banner/banner_1_1_1.svg';
import banner_1_1_2 from '@assets/banner/banner_1_1_2.svg';
import banner_1_1_3 from '@assets/banner/banner_1_1_3.svg';
import banner_2 from '@assets/banner/banner_2.svg';
import banner_2_1 from '@assets/banner/banner_2_1.svg';
import banner_2_2 from '@assets/banner/banner_2_2.svg';

import banner_3 from '@assets/banner/banner_3.svg';
import banner_4 from '@assets/banner/banner_4.svg';
import banner_5 from '@assets/banner/banner_5.svg';
import banner_6 from '@assets/banner/banner_6.svg';
import nextIcon from '../../../public/icon/bannerNextIcon.svg';
import prevIcon from '../../../public/icon/bannerPrevIcon.svg';
import { useEffect, useState } from 'react';
import AlertModal from '../common/layout/AlertModal';
import { checkTodayDiary } from '../../apis/user';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute w-14 h-14  right-4 top-[45%] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src={nextIcon} alt="" className="w-12 h-12" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute w-14 h-14 left-4 top-[45%] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src={prevIcon} alt="" className="w-12 h-12" />
    </div>
  );
}

const IntroduceSection = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const settings = {
    dots: true, // 점 표시 여부
    infinite: true, // 무한 루프 설정
    speed: 1500, // 슬라이드 전환 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    autoplay: true, // 자동 재생 여부
    autoplaySpeed: 6000, // 자동 재생 속도 (6초)
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  };

  const handleBanner = async () => {
    try {
      const res = await checkTodayDiary();
      console.log(res);
      if (!res.checkTodayDairy) {
        setIsModal(!isModal);
      } else {
        navigate('/writing');
      }
    } catch (error) {
      console.error('Error checking today diary:', error);
    }
  };

  const handleButtonClick = () => {
    setIsModal(false);
    navigate('/search');
  };

  return (
    <div>
      <Slider {...settings}>
        <Link>
          {/* <div className="relative">
            <img
              src={banner_1}
              alt="Banner 1"
              className="w-full absolute top-[-15px] z-10"
            />
        
            <img
              className="animate-bounce w-full  absolute top-[-25px] z-20"
              src={banner_1_1_1}
              alt="Banner 1_1_1"
            />
            <img
              className="animate-bounce2 w-full  absolute top-[-25px] z-20"
              src={banner_1_1_2}
              alt="Banner 1_1_2"
            />
            <img
              className="animate-bounce3 w-full  absolute top-[-25px] z-20"
              src={banner_1_1_3}
              alt="Banner 1_1_3"
            />
          </div> */}
          <img src={banner_1} alt="Banner 1" className="w-full" />
        </Link>
        <Link onClick={handleBanner}>
          <div className="relative">
            <img
              src={banner_2}
              alt="Banner 2"
              className="w-full absolute top-[-16px]  z-10 "
            />
            <img
              src={banner_2_1}
              alt="Banner 2_1"
              className="animate-spin w-[60%] absolute z-20 right-[70px] top-[-20px]"
            />
            <img
              src={banner_2_2}
              alt="Banner 2_2"
              className="absolute z-30 w-full "
            />
          </div>
          <div className="absolute bottom-0 z-30 w-full h-[10px] bg-[#E8DBCF]"></div>
        </Link>
        <Link onClick={handleBanner}>
          <img src={banner_3} alt="Banner 3" className="w-full" />
        </Link>
        <Link to="/search">
          <img src={banner_4} alt="Banner 4" className="w-full" />
        </Link>
        <Link to="/counseling">
          <img src={banner_5} alt="Banner 5" className="w-full" />
        </Link>
        <Link to="/mypage/stats">
          <img src={banner_6} alt="Banner 6" className="w-full" />
        </Link>
      </Slider>
      {isModal && (
        <AlertModal
          handleButtonClick={handleButtonClick}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
};

export default IntroduceSection;
