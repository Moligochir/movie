import { HeroSlide } from "../_components/HeroSlide";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const ClickedMovie = (props) => {
  const param = useParams();
  const { id } = param;

  const apiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const [movie, setMovie] = useState();
  const apiLinkDirector = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const [director, setDirector] = useState();
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    setMovie(jsonData);
  };

  const getDataDirector = async () => {
    const dataDirector = await fetch(apiLinkDirector, options);
    const jsonDataDirector = await dataDirector.json();
    console.log(jsonDataDirector);

    setDirector(jsonDataDirector);
  };

  useEffect(() => {
    getData();
    getDataDirector();
  }, [id]);

  if (!id) {
    return <div>Something wrong!!!</div>;
  }

  return (
    <div>
      <div className="w-full pt-[52px] flex justify-between pl-45 pr-45">
        <div className="">
          <div className="h-[40px] text-[36px]">{movie?.original_title} </div>
          <div className="h-[28px] text-[18px] pt-[8px]">
            {movie?.release_date} · PG · {movie?.runtime}
          </div>
        </div>
        <div>
          <div className="text-[12px]">Rating</div>
          <div className="flex">
            <img src="/star.svg" />
            <h1 className="text-[12px] p-1">
              <span className="text-[#09090B] flex text-[16px]">
                {movie?.vote_average}
                <h1>/10</h1>
              </span>
              {movie?.vote_count}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full pt-[24px] flex justify-between pl-45 pr-45">
        <div>
          <img
            className="h-[428px]"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          />
        </div>
        <div className="flex items-end relative ">
          <img
            className="h-[428px]"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          />
          <h1 className="w-full flex absolute items-center  pb-6 pl-6 gap-2 text-white">
            <button className="w-10 h-10 rounded-[100%] bg-white flex justify-center items-center">
              <img className="w-3" src="/PlayVector.svg" />
            </button>
            Play trailer
          </h1>
        </div>
      </div>
      <div className="w-full flex pl-45 pr-45  pt-[32px] gap-[12px]">
        {movie?.genres.map((genre, index) => {
          return (
            <button className="text-[#09090B] border-1 rounded-full pl-[10px] pr-[10px]">
              {genre.name}
            </button>
          );
        })}
      </div>
      <div className="w-full flex pl-45 pr-45  pt-[20px] gap-[12px]">
        <h1 className="text-[16px]">{movie?.overview}</h1>
      </div>
      <div className="w-full flex pl-45 pr-45  pt-[20px] gap-[12px]">
        <h1>
          Director
          <span>{director?.crew[0]?.name}</span>
        </h1>
      </div>

      <div></div>
      <h1></h1>
      <div></div>
    </div>
  );
};
