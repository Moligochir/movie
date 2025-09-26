import { MovieCardDb } from "../_components/MovieCardDb";
export const MovieCard = (props) => {
  const {title, } = props;
return (
  <div className="pt-[52px] justify-center pl-20 pr-20 w-full h-full">
        <div className="flex w-full h-[32px] justify-between ">
          <div className="w-[250px] text-[30px] rounded-[6px] bg-[#F4F4F5]">{title}</div>
          <button className="w-[165px] h-[36px] text-5 flex  gap-2 items-center rounded-[6px] bg-[#F4F4F5]">see more <img src="./rightArrow.svg" /></button>
        </div>
        <div className="flex w-1/5 pt-[32px] gap-[13%]">
        <MovieCardDb rank={""} name={""} imageName={""}
        />
        <MovieCardDb rank={""} name={""} imageName={""}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        /></div>
        <div className="flex w-1/5 pt-[32px] gap-[13%]">
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        <MovieCardDb rank={"6,9"} name={"Dear Santa"} imageName={"imageName"}
        />
        </div>
      </div>
)
}