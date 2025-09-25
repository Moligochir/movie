export const MovieList = (props) => {
  return (
    <div className="pt-[52px] pb-[32px]">
      <div className="flex w-full text=[32px] justify-between  pl-20 pr-20">
        <div className="w-[250px] h-[32px] rounded-[6px] bg-[#F4F4F5]"></div>
        <div className="w-[165px] h-[36px] rounded-[6px] bg-[#F4F4F5]"></div>
      </div>
      <div className=" flex-row w-[229.73px] rounded-[8px] h-auto bg-[#D9D9D9]">
        <img className=" h-[340px] " />
        <div className="h-[95px] pl-2 justify-start">
          <div className="flex gap-[8px]">
            <img className="h-[18px]" src="./star.svg" />
            <h1 className="text-[#71717A] pl-[4px]">
              <span className="text-[#09090B]">6.9</span>/10
            </h1>
          </div>
          Dear Santa
        </div>
      </div>
    </div>
  );
};
