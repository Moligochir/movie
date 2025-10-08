"use client";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSlide = (props) => {
  const [isShow, setIsShow] = useState(false);

  const handleWatchTrailerButton = () => {
    setIsShow(true);
  };
  const handleWatchTrailerButton2 = () => {
    setIsShow(false);
  };
  const { name, rank, description, movieId } = props;
  const apiLinkTrailer = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const [trailer, setTrailer] = useState();
  const getData = async () => {
    const dataTrailer = await fetch(apiLinkTrailer, options);
    const jsonDataTrailer = await dataTrailer.json();
    console.log("hey", jsonDataTrailer);

    setTrailer(jsonDataTrailer);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      {isShow && (
        <div className="">
          <div className=" w-full flex-col justify-end ">
            <iframe
              className="w-[997px] h-[561px] absolute z-[10]"
              src={`https://youtube.com/embed/${trailer?.results[2].key}`}
            ></iframe>
            <div
              className="text-2xl rounded-[100%] border-[1px]  bg-amber-50 w-[40px] text-red-600 flex justify-center absolute z-20"
              onClick={handleWatchTrailerButton2}
            >
              x
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full">
        <h1 className="text-[24px]">Now Playing:</h1>
        <h2 className="text-[40px]"> {name}</h2>

        <h3 className="text-[28px] flex text-[#71717A]">
          <img className="w-[38px]" src="./star.svg" />
          <span className="text-[#FAFAFA] pl-[4px]">{rank}</span>
          /10
        </h3>

        <p className="text-[16px] text-shadow-black w-[310px] pb-[16px] pt-[16px]">
          {description}
        </p>

        <button
          onClick={handleWatchTrailerButton}
          className="bg-[#F4F4F5] text-[#18181B] text-[20px] flex gap-2 pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[6px] cursor-pointer "
        >
          <img src="./PlayVector.svg" />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
