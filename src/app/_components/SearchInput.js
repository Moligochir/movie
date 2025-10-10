export const SearchInput = ({ search }) => {
  return (
    <div className="w-full h-full left-[40%] top-[80%] absolute z-[20]">
      {search.map((movie, index) => {
        return (
          <div
            key={index}
            className="w-[577px] bg-white border-1 border-[#E4E4E7] p-3"
          >
            <div className="w-full flex ">
              <div className="w-[67px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  className="h-[100px] rounded-t-[6px] w-[67px]"
                />
              </div>

              <div className="w-full pl-3 pr-2">
                <h1 className="flex h-[28px] text-[20px]">{movie.title}</h1>
                <div className="flex h-[14px] text-[14px]">
                  <img className="h-[14px]" src="/star.svg" />
                  <span className="text-[#09090B]">{movie.vote_average}</span>
                  /10
                </div>
                <div className="flex justify-between p-2 h-[36px]">
                  <h1 className="w-full">{movie.release_date}</h1>
                  <button className="h-[36px] w-full text-[14px] flex gap-2  justify-end items-center">
                    see more
                    <img className="h-[10px] w-[10px]" src="/rightArrow.svg" />
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-1 border-[#E4E4E7]"></hr>
          </div>
        );
      })}
    </div>
  );
};
