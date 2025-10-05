"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MovieCardDb } from "../_components/MovieCardDb";
import Link from "next/link";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const GenreMovieList = () => {
  
  
  const param = useParams();
  const { id } = param;
  
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const apiLink = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${page}`;
  const apiLinkGenre = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    
    
    setMovies(jsonData.results);
  }
  
  const getDataGenre = async () => {
    const dataGenre = await fetch(apiLinkGenre, options);
    const jsonDataGenre = await dataGenre.json();
    setGenre(jsonDataGenre.genres);
    
  }

  useEffect(() => {
  
    getData();
    getDataGenre();
  }, [page]);
  return (
    <div className="w-full pl-[80px] pr-[80px]">
      <div className="pt-[52px] w-full h-full pb-[32px]">
        <span className="text-[32px] font-black">Search filter</span>
        <div className="flex">
          <div className=" w-1/3 bg-white border-[#E4E4E7] rounded-[8px]">
          <div className=" font-black text-[24px]">Genres</div>
          <h1 className="pb-[20px] text-[#09090B]">
            See lists of movies by genre
          </h1>
          
          <div className="flex flex-wrap gap-[16px] ">
            {genre.map((item, index) => { 
              return (
                // <Link key={index} href={`/genre/${item.id}`}>
                  <div key={index}
                  className=" grid-cols-5 border-1 border-[#E4E4E7] font-semibold text-[12px] h-[20px] rounded-full">
                  <button className="w-full flex items-center pl-2.5 pr-2  gap-1 ">
                    {item.name}
                    <img className="w-1 h-2" src="/RightVector.svg " />
                  </button>
                </div>
                // </Link>
              );  
            })}
          </div>
        </div>
        <div className="flex w-[1px] pl-5 pr-5">
            <hb className="text-[#E4E4E7] h-full border-[1px]"></hb>
        </div>
        <div>
          <div className="text-[20px] font-black pb-[32px]">
            
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
        <div className="flex justify-end w-full text-[14px] pt-[32px] ">
            <div className="flex gap-1 ">
            <button className="flex items-center gap-2 text-5 px-[16px] py-[8px]"><img className="w-1 h-2" src="/LeftVector.svg"/>Previous</button>
            <button className="flex items-center border-[1px] border-[#E4E4E7] px-[16px] py-[10px]">1</button>
            <button className="flex items-center px-[16px] py-[10px]">2</button>
            <button className="flex items-center px-[16px] py-[10px]">3</button>
            <button className="flex items-center px-[16px] py-[10px] gap-2">Next<img className="w-1 h-2" src="/RightVector.svg"/></button>
            </div></div>
        </div>
        </div>
      </div>
      
    </div>
  );
};
