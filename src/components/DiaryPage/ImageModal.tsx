import close from '../../../public/icon/close.svg';

const ImageModal = ({ imgSource, setImgModal, imgModal }) => {
  const closeImage = () => {
    setImgModal(!imgModal);
  };

  return (
    <>
      {imgModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-stone-600/60 z-50">
          <div className="relative flex items-start">
            <img
              src={imgSource}
              className="max-w-full max-h-screen border-[8px] border-[#B98D6D] rounded-[20px]"
              alt="Modal Image"
            />
            <img
              onClick={closeImage}
              src={close}
              className=" m-2 cursor-pointer"
              alt="Close Icon"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
