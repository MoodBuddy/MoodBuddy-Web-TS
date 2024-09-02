import React, { useEffect, useState } from 'react';

const Dropdown = (props) => {
  const [visiblityAnimation, setVisiblityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visiblity) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisiblityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisiblityAnimation(false);
        }, 400),
      );
    }
  }, [props.visiblity]);

  return (
    <div
      className={`absolute top-[45px] z-20 ${
        props.visiblity ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }`}
    >
      {visiblityAnimation && props.children}
    </div>
  ); //단락회로평가
};

export default Dropdown;
