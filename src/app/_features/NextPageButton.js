export const NextPageButton = (props) => {
  const { page, setPage, result } = props;

  const HandleNextButton = () => {
    return setPage(page + 1);
  };
  const HandlePreviousButton = () => {
    if (page == 1) {
      return page;
    }
    return setPage(page - 1);
  };
  return (
    <div className="flex justify-end w-full text-[14px] pt-[32px] ">
      <div className="flex gap-1 ">
        <button
          onClick={HandlePreviousButton}
          className="flex items-center gap-2 text-5 px-[16px] py-[8px]"
        >
          <img className="w-1 h-2" src="/LeftVector.svg" />
          Previous
        </button>
        <button className="flex items-center border-[1px] border-[#E4E4E7] px-[16px] py-[10px]">
          {page}
        </button>
        <button className="flex items-center px-[16px] py-[10px]">
          {page + 1}
        </button>
        <button className="flex items-center px-[16px] py-[10px]">...</button>
        <button className="flex items-center px-[16px] py-[10px]">
          {result - page}
        </button>
        <button
          onClick={HandleNextButton}
          className="flex items-center px-[16px] py-[10px] gap-2 cursor-pointer"
        >
          Next
          <img className="w-1 h-2" src="/RightVector.svg" />
        </button>
      </div>
    </div>
  );
};
