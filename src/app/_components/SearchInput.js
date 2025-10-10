"use client"
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const SearchInput = () => {
    const [search, setSearch] = useState()
    const apiLink = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

    const getData = async () => {
        const data = await fetch(apiLink, options);
        const jsonData = await data.json();
        setSearch(jsonData.results);
      };
        useEffect(() => {
        getData();
      }, []);
    
 return (
    <div className="w-full h-full flex justify-center absolute">
      <div className="w-[577px] flex border-1">
        <div className="">
            <img
            src={"/MovieWicked.svg"}
            className="h-[100px] rounded-t-[6px] w-[67px]"
        />
      </div>
            
          
          <div className="w-full">
                <h1 className="flex h-[28px] text-[20px]">wicked</h1>
            <div className="flex h-[14px] text-[14px]">
                <img className="h-[14px]" src="/star.svg" />
                <span className="text-[#09090B]">7</span>/10
            </div>
            <div className="flex justify-between h-[36px]"><h1 className="w-full">2024</h1>
                <button className="h-[36px] w-full text-[14px] flex gap-2 items-center rounded-[6px]">
              see more <img className="h-[10px]" src="/rightArrow.svg" />
            </button></div>
            </div>
          
        
    
      
    
      </div>
    </div>)};