export const MovieCardDb = (props) => {
  const {rank, name, imageName} = props;
  return (
    <div className=" flex-row w-full rounded-[8px] h-full bg-[#F4F4F5]">
        <img src="{imageName}" className="h-[340px]" />
        <div className="h-[95px] w-[229.73px] pl-2 justify-start">
          <div className="flex gap-[8px]">
            <img className="h-[18px]" src="./star.svg" />
            <h1 className="text-[#71717A] pl-[4px]">
              <span className="text-[#09090B]">{rank}</span>/10
            </h1>
          </div>
          {name}
        </div>
      </div>
  )
};
