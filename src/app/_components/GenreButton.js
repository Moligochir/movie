"use client";

import { use, useEffect, useState } from "react";
import { GenreMovieList } from "../_features/GenreMovieList";
import { useRouter } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const GenreButton = () => {
  const [genre, setGenre] = useState([]);
  const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const router = useRouter();
  const HandleGenreClick = () => {
    router.push(`/genre/${genre.id}`);
  };
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    setGenre(jsonData.genres);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex absolute ">
      <div className="">
        <div className="w-[577px] bg-white pl-5 pt-5 border-1 border-[#E4E4E7] rounded-[8px]">
          <div className="font-black text-[24px]">Genres</div>
          <h1 className="pb-[20px] text-[#09090B]">
            See lists of movies by genre
          </h1>
          <div className="w-full text-[#E4E4E7] pr-5 ">
            <hr className=""></hr>
          </div>
          <div className="flex flex-wrap gap-[16px] p-4">
            {genre.map((item, index) => {
              console.log(item.name);
              return (
                <div
                  onClick={HandleGenreClick}
                  key={index}
                  className=" grid-cols-5 border-1 font-semibold text-[12px] h-[20px] rounded-full"
                >
                  <button className="w-full flex items-center pl-2.5 pr-2 cursor-pointer gap-1 ">
                    {item.name}
                    <img className="w-1 h-2" src="/RightVector.svg" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
