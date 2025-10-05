"use client";
import Link from "next/link";
import { MovieCardDb } from "../_components/MovieCardDb";
import { use, useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const UpcomingMoviesList = ({ isDetails }) => {
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div className="pt-[52px] pl-20 pr-20 w-full h-full ">
      <div className="flex w-full h-[32px] justify-between ">
        <div className="flex w-[250px] text-[30px] rounded-[6px] items-center  justify-start bg-[#F4F4F5]">
          Upcoming
        </div>
        <Link href={"/upcoming"} className={`${isDetails ? "hidden" : ""}`}>
          <button className="w-[165px] h-[36px] text-5 flex  gap-2 items-center justify-center rounded-[6px] bg-[#F4F4F5]">
            see more <img src="./rightArrow.svg" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-5 pt-[32px] gap-[32px]">
        {movies.slice(0, isDetails ? 20 : 10).map((movie, index) => {
          return (
            <MovieCardDb
              key={index}
              rank={movie.vote_average}
              name={movie.title}
              imageName={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              movieId={movie.id}
            />
          );
        })}
        </div>
      <div className={`${!isDetails ? "hidden" : ""}`}>
        <div className="flex justify-end w-full text-[14px] pt-[32px] ">
        <div className="flex gap-1 ">
        <button className="flex items-center gap-2 text-5 px-[16px] py-[8px]"><img className="w-1 h-2" src="/LeftVector.svg"/>Previous</button>
        <button className="flex items-center border-[1px] border-[#E4E4E7] px-[16px] py-[10px]">1</button>
        <button className="flex items-center px-[16px] py-[10px]">2</button>
        <button className="flex items-center px-[16px] py-[10px]">3</button>
        <button className="flex items-center px-[16px] py-[10px] gap-2">Next<img className="w-1 h-2" src="/RightVector.svg"/></button>
        </div>
      </div>
      </div>
    </div>
  );
};
