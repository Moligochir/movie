import { useRouter } from "next/navigation";
export const MovieCardDb = (props) => {
  const { rank, name, imageName, movieId } = props;
  const router = useRouter();
  const HandleMovieClick = () => {
    router.push(`movie-detail/${movieId}`);
  };

  return (
    <div className=" flex-row w-full h-full bg-[#F4F4F5] rounded-b-[8px] cursor-pointer">
      <img
        onClick={HandleMovieClick}
        src={imageName}
        className="h-[350px] rounded-t-[8px] w-full"
      />
      <div className="h-[95px] w-[229.73px] pl-2 justify-start">
        <div className="flex pt-[8px] gap-[8px]">
          <img className="h-[18px]" src="./star.svg" />
          <h1 className="text-[#71717A] pl-[4px] ">
            <span className="text-[#09090B]">{rank}</span>/10
          </h1>
        </div>
        {name}
      </div>
    </div>
  );
};
