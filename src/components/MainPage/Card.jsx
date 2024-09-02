const Card = ({ children }) => {
  return (
    <div className="w-[382px] h-[531px] rounded-[29px] bg-[#F4EDE7] border-solid border-[5px] border-black p-4">
      <div className="flex gap-2 justify-end mr-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-[9px] h-[9px] rounded-full bg-zinc-500"
          />
        ))}
      </div>

      <div className="h-[1px] my-3 w-full bg-black" />
      {children}
    </div>
  );
};

export default Card;
