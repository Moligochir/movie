"use client";
import { use, useEffect, useState } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Genre = () => {
  const [genre, setGenre] = useState([]);
  const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("genres ", jsonData.genres);

    setGenre(jsonData.genres);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("sda", genre);

  return (
    <div className="w-full flex justify-center pt-[52px] ">
      <div className="w-[577px] pl-5 pt-5 border-1 rounded-[8px]">
        <div>Genres</div>
        <h1 className="pl-1">See lists of movies by genre</h1>
        <div className="">
          <div className="flex gap-4 w-[577px]">
            {genre.map((item, index) => {
              return (
                <button
                  key={index}
                  className="text-3 text-bold border-1 rounded-full pl-[10px] pr-[10px]"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
