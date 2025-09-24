export const HeroSection = (props) => {
  return (
    <div className="flex items-center relative">
      <img className="w-full h-full" src="./MovieWicked.svg" />
      <div className="w-full flex justify-between absolute items-center pl-[140px] pr-[44px] text-amber-50">
        <div className="w-[404px]">
          <div className="">
            <h1 className="text-[16px]">Now Playing:</h1>
            <h2 className="text-[36px]"> Wicked</h2>
            <h3 className="text-[18px]">6.9/10</h3>

            <p className="text-[12px] w-[302px] pb-[16px] pt-[16px]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.{" "}
            </p>
            <button className="bg-[#F4F4F5] text-[#18181B] text-[14px] flex gap-2 pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[6px]">
              <img src="./PlayVector.svg" />
              Watch Trailer
            </button>
          </div>
        </div>
        <div className="">
        <button className="bg-[#F4F4F5] flex justify-center items-center w-[40px] h-[40px] text-[16px] rounded-[100%] ">
          <img className="text-[16px] w-[4px] h-[8px]" src="./RightVector.svg" />
        </button></div>
      </div>
    </div>
  );
};
