"use client";
import { HeroSlide } from "../_components/HeroSlide";
import { useEffect, useState } from "react";
const apiLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSection = (props) => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {movies.slice(0, 1).map((movie, index) => {
        return (
          <div key={index} className="relative">
            <div
              id="scroll"
              className="flex w-full h-full items-center relative pt-5"
            >
              <img
                className="w-full h-full bg-[#F4F4F5] relative z-[-1]"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />

              <div className="w-full flex justify-between absolute items-center pl-[140px] pr-[44px] text-amber-50">
                <HeroSlide
                  key={index}
                  name={movie.title}
                  rank={movie.vote_average}
                  description={movie.overview}
                />
                <div>
                  <button className="bg-[#F4F4F5] flex justify-center items-center w-[40px] h-[40px] text-[16px] rounded-[100%] ">
                    <img
                      className="text-[16px] w-[4px] h-[8px]"
                      src="./RightVector.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-full h-full flex justify-center gap-2 items-end absolute pb-[37px]">
                <button className="w-[8px] h-[8px] bg-white rounded-[100%]"></button>
                <button className="w-[8px] h-[8px] bg-white rounded-[100%]"></button>
                <button className="w-[8px] h-[8px] bg-white rounded-[100%]"></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
