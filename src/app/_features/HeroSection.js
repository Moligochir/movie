"use client";

import { HeroSlide } from "../_components/HeroSlide";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSection = (props) => {
  const apiLink =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const [slide, setSlide] = useState(0);

  const ClickBackButton = () => {
    setSlide(slide + 1);
    if (slide + 1 > 2) {
      setSlide(0);
    }
  };
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setMovies(jsonData.results);

    setMovies(jsonData.results);
  };
  console.log("sdada", movies);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100%] overflow-hidden ">
      <div className={`flex w-[300%] h-full -translate-x-[${slide * 1440}px]`}>
        {movies.slice(0, 3).map((movie, index) => {
          return (
            <div key={index} className="flex relative w-full h-full">
              <div className="flex items-center">
                <div>
                  <img
                    className="w-full h-full z-[-1] relative "
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  />
                </div>

                <div className="w-full h-full flex justify-between absolute items-center pl-[140px] pr-[44px] text-amber-50">
                  <HeroSlide
                    key={index}
                    name={movie.title}
                    rank={movie.vote_average}
                    description={movie.overview}
                    movieId={movie.id}
                  />
                  <div>
                    <button
                      onClick={ClickBackButton}
                      className="bg-[#F4F4F5] flex justify-center items-center w-[40px] h-[40px] text-[16px] rounded-[100%] cursor-pointer z-99999"
                    >
                      <img
                        className="text-[16px] w-[4px] h-[8px]"
                        src="./RightVector.svg"
                      />
                    </button>
                  </div>
                  <div className="w-10 h-2 flex justify-between absolute left-[50%] top-[92%]">
                    <button
                      className={`w-[8px] h-[8px] rounded-[100%] ${
                        slide === 0 ? "bg-gray-500" : "bg-white"
                      }`}
                      onClick={() => setSlide(0)}
                    ></button>
                    <button
                      className={`w-[8px] h-[8px] z-[1]  rounded-[100%] ${
                        slide === 1 ? "bg-gray-500" : "bg-white"
                      }`}
                      onClick={() => setSlide(1)}
                    ></button>
                    <button
                      className={`w-[8px] h-[8px] z-[1]  rounded-[100%] ${
                        slide === 2 ? "bg-gray-500" : "bg-white"
                      }`}
                      onClick={() => setSlide(2)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
