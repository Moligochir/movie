export const Header = (props) => {
  return (
    <div className="flex w-full justify-between pt-3 pl-20 pr-20">
      <div className="flex gap-2 text-[16px]">
        <img className="w-[20px]" src="/movieZ.svg" />
        <button className="text-[#4338CA]">MovieZ</button>
      </div>
      <div className="flex gap-6 text-[14px]">
        <div className="flex gap-2 text-[#18181B] border border-[#E4E4E7] rounded-[8px] p-2 pl-4 pr-4">
          <img className="w-[16px]" src="/Genre.svg" />
          <button className="">Genre</button>
        </div>
        <div className="flex gap-2 text-[#09090B] w-[379px] border border-[#E4E4E7] rounded-[8px] p-2 pl-4 pr-4">
          <img className="w-[16px] text-[#09090B]" src="/search.svg" />
          <input className="text-[#x09090B]" placeholder="Search.."></input>
        </div>
      </div>
      <button className="text-[#18181B] border border-[#E4E4E7] rounded-[8px] p-2">
        <img className="w-[16px] " src="/moon.svg" />
      </button>
    </div>
  );
};
