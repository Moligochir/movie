export const NextPageButton = (props) => {
  return (
    <div className="flex justify-end w-full text-[14px] pt-[32px] ">
      <div className="flex gap-1 ">
        <button className="flex items-center gap-2 text-5 px-[16px] py-[8px]">
          <img className="w-1 h-2" src="/LeftVector.svg" />
          Previous
        </button>
        <button className="flex items-center border-[1px] rounded-[6px] border-[#E4E4E7] px-[16px] py-[10px]">
          1
        </button>
        <button className="flex items-center px-[16px] py-[10px]">2</button>
        <button className="flex items-center px-[16px] py-[10px]">3</button>
        <button className="flex items-center px-[16px] py-[10px] gap-2">
          Next
          <img className="w-1 h-2" src="/RightVector.svg" />
        </button>
      </div>
    </div>
  );
};
