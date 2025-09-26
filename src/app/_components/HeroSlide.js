export const HeroSlide = (props) => {
  const { name, rank, description } = props;
  return (
    <div>
      <h1 className="text-[16px]">Now Playing:</h1>
      <h2 className="text-[36px]"> {name}</h2>

      <h3 className="text-[18px] flex text-[#71717A]">
        <img src="./star.svg" />
        <span className="text-[#FAFAFA] pl-[4px]">{rank}</span>
        /10
      </h3>

      <p className="text-[12px] w-[302px] pb-[16px] pt-[16px]">{description}</p>
      <button className="bg-[#F4F4F5] text-[#18181B] text-[14px] flex gap-2 pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[6px]">
        <img src="./PlayVector.svg" />
        Watch Trailer
      </button>
    </div>
  );
};
