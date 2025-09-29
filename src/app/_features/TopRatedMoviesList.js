"use client";
import { MovieCardDb } from "../_components/MovieCardDb";
import {use, useEffect, useState } from "react";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const TopRatedMoviesList = (props) => {
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);
  };

  console.log(movies, "minii data");

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="pt-[52px] pl-20 pr-20 w-full h-full ">
      <div className="flex w-full h-[32px] justify-between ">
        <div className="flex w-[250px] text-[30px] rounded-[6px] items-center  justify-start bg-[#F4F4F5]">
          Top Rated
        </div>
        <Link href={"toprated"}>
          <button className="w-[165px] h-[36px] text-5 flex  gap-2 items-center justify-center rounded-[6px] bg-[#F4F4F5]">
            see more <img src="./rightArrow.svg" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-5 pt-[32px] gap-[32px]">
        {movies.slice(0, 10).map((movie, index) => {
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
    </div>
  );
};
