"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieCardDb } from "../_components/MovieCardDb";
import Link from "next/link";
import { NextPageButton } from "./NextPageButton";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const SearchMovieList = (porps) => {
  const searchParams = useSearchParams();
  const value = searchParams.get("name");
  const param = useParams();
  const { id } = param;
  console.log(value, "asdasdasdasd");

  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const apiLink = `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=${page}`;
  const apiLinkGenre = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const [movies, setMovies] = useState([]);
  const [result, setResults] = useState([]);

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setResults(jsonData.total_pages);
    setMovies(jsonData.results);
  };
  console.log(movies, "yumaa");

  const getDataGenre = async () => {
    const dataGenre = await fetch(apiLinkGenre, options);
    const jsonDataGenre = await dataGenre.json();
    setGenre(jsonDataGenre.genres);
  };
  const selectedGenreName = genre.filter((item) => item.id == id);

  useEffect(() => {
    getData();
    getDataGenre();
  }, []);

  return (
    <div className="w-full pl-[80px] pr-[80px]">
      <div className="pt-[52px] w-full h-full pb-[32px]">
        <span className="text-[32px] font-black">Search results</span>
        <div className="flex">
          <div>
            <div className="text-[20px] font-black pb-[32px]">
              title in "{value}"
            </div>
            <div className="grid grid-cols-4 gap-[32px]">
              {movies.slice(0, 12).map((movie, index) => {
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
            <NextPageButton page={page} setPage={setPage} result={result} />
          </div>
          <div className="flex w-[1px] pl-5 pr-5">
            <hb className="text-[#E4E4E7] h-full border-[1px]"></hb>
          </div>
          <div className=" w-2/5 bg-white border-[#E4E4E7] rounded-[8px]">
            <div className=" font-black text-[24px]">Genres</div>
            <h1 className="pb-[20px] text-[#09090B]">
              See lists of movies by genre
            </h1>

            <div className="flex w-full flex-wrap gap-[16px] ">
              {genre.map((item, index) => {
                return (
                  <Link key={index} href={`/genre/${item.id}`}>
                    <div
                      className={`grid-cols-5 border-1 border-[#E4E4E7] font-semibold text-[12px] h-[20px] rounded-full ${
                        item.id == id ? "border-amber-700 text-amber-700" : ""
                      }`}
                    >
                      <button className="w-full flex items-center pl-2.5 pr-2  gap-1 ">
                        {item.name}
                        <img className="w-1 h-2" src="/RightVector.svg " />
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
