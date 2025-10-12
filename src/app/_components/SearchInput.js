export const SearchInput = ({ search, inputValue}) => {
  return (
    <div className="w-full h-[500%] left-[40%] top-[80%] absolute z-[20]">
      {search.slice(0, 5).map((movie, index) => {
        return (
          <div
            key={index}
            className="w-[600px]  overflow-hidden bg-white border-none p-3"
          >
            <div className="w-full flex pb-3">
              <div className="w-[67px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  className="h-[100px] rounded-[6px] w-[67px]"
                />
              </div>

              <div className="w-full pl-3 pr-2">
                <h1 className="flex h-[28px] text-[17px] font-Semibold">{movie.title}</h1>
                <div className="flex h-[14px] text-[14px] items-center font-regular text-[#09090B]">
                  <img className="h-[14px]" src="/star.svg" />
                  {movie.vote_average}<span className="text-[#71717A] text-[12px]">/10</span>
                  
                </div>
                <div className="flex justify-between p-3 h-[36px]">
                  <h1 className="w-full font-medium">{movie.release_date}</h1>
                  <button className="h-[36px] w-full text-[14px] flex gap-2  justify-end items-center">
                    see more
                    <img className="h-[10px] w-[10px]" src="/rightArrow.svg" />
                  </button>
                </div>
              </div>
            </div>
            <hr className=" font-normal text-[#E4E4E7] gap-[10px]"></hr>
            <button>See all results for "{inputValue}"</button>
          </div>
        );
      })}
    </div>
  );
};
