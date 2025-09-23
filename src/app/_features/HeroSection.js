export const HeroSection = (props) => {
  return (
    <div className="flex items-center relative">
      <img className="w-full h-full" src="./MovieWicked.svg" />
      <div className="w-full flex justify-between absolute items-center pl-[140px] pr-[44px] text-amber-50">
        <div className="w-[404px]">
          <div className="">
            <h1 className="">Now Playing:</h1>
            <h2 className=""> Wicked</h2>
            <h3>6.9/10</h3>

            <p>
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.{" "}
            </p>
            <button>
              <img src="./PlayVector.svg" />
              Watch Trailer
            </button>
          </div>
        </div>
        <div></div>
        <button className="bg-[#F4F4F5] w-[40px] h-[40px] text-[16px]">
          <img src="./RightVector.svg" />
        </button>
      </div>
    </div>
  );
};
