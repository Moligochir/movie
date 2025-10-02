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
       <div className="">
        <div className="w-[577px] pl-5 pt-5 border-1 rounded-[8px]">
        <div>Genres</div>
        <h1 className="pl-0">See lists of movies by genre</h1>
       
          <div className="flex h-5 border-1 gap-[12px]">
            {genre.map((item, index) => {
              console.log(item.name)
              return (
                <div key={index}
                  className=" ">
                    <button className="flex w-full items-center gap-1 h-20px ">{item.name}<img className="w-1 h-2" src="/RightVector.svg"/></button>
                    </div>
              );
            })}
          </div> 
        </div> 
      </div>
    </div>
  );
};
