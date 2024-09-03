import spinner from '@assets/spinner.svg';

const LoadingSpinner = () => (
  <div className="flex flex-col h-screen items-center justify-center gap-10">
    <p className="font-meetme text-7xl">로딩중이에요 . . .</p>
    <img src={spinner} alt="spinner" className="animate-spin w-28" />
  </div>
);

export default LoadingSpinner;
