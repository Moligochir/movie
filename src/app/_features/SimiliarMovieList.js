"use client";

import { use, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MovieCardDb } from "../_components/MovieCardDb";
import { NextPageButton } from "./NextPageButton";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const SimillarMovieList = ({ isDetails }) => {
  const param = useParams();
  const { id } = param;
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`;
  const [movies, setMovies] = useState([]);
  const [result, setResults] = useState([]);

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);
    setResults(jsonData.total_pages);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className={`${isDetails ? "pl-20 pr-20" : "pl-45 pr-45"}`}>
      <div className="pt-[32px] w-full h-full pb-[112px] ">
        <div className="flex w-full h-[32px] justify-between ">
          <div className="flex w-[250px] text-[24px] rounded-[6px] items-center  justify-start">
            More like this
          </div>
          <Link
            href={`/simillar/${id}`}
            className={`${isDetails ? "hidden" : ""}`}
          >
            <button className="w-[165px] h-[36px] text-[14px] flex  gap-2 items-center justify-center rounded-[6px] bg-[#F4F4F5]">
              see more <img src="/rightArrow.svg" />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-5 pt-[32px] gap-[32px]">
          {movies.slice(0, isDetails ? 20 : 5).map((movie, index) => {
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
          <NextPageButton page={page} setPage={setPage} result={result} />
        </div>
      </div>
    </div>
  );
};
