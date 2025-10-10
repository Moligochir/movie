"use client";

import { useRouter } from "next/navigation";
import { GenreButton } from "../_components/GenreButton";
import { useEffect, useState } from "react";
import { SearchInput } from "../_components/SearchInput";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const Header = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    console.log("Input value is now:", event.target.value);
  };
  const apiLink = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1`;

  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("search data", jsonData);
    setSearch(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [inputValue]);

  const handleGenreButton = () => {
    setIsShow(!isShow);
  };
  const router = useRouter();
  const handleMovieZButton = () => {
    router.push(`/`);
  };
  return (
    <div>
      <div className="flex w-full justify-between pt-6 pl-20 pr-20 pb-6 relative">
        <div
          className="flex gap-2 text-[16px] cursor-pointer"
          onClick={handleMovieZButton}
        >
          <img className="w-[20px] " src="/movieZ.svg " />
          <button className="text-[#4338CA] cursor-pointer">MovieZ</button>
        </div>
        <div className="flex gap-6 text-[14px] ">
          <div className=" text-[#18181B] border border-[#E4E4E7] rounded-[8px] p-2 pl-4 pr-4">
            <div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={handleGenreButton}
              >
                <img className="w-[16px]" src="/Genre.svg" />
                <button className="">Genre</button>
              </div>
              {isShow && <GenreButton />}
            </div>
          </div>
          <div>
            <div className="flex gap-2 text-[#09090B] w-[379px] border border-[#E4E4E7] rounded-[8px] p-2 pl-4 pr-4">
              <img className="w-[16px] text-[#09090B]" src="/search.svg" />
              <input
                onChange={handleSearchInput}
                type="text"
                value={inputValue}
                className="text-[#x09090B]"
                placeholder="Search.."
              ></input>
              {inputValue.length > 0 && <SearchInput search={search} />}
            </div>
          </div>
        </div>
        <button className="text-[#18181B] border border-[#E4E4E7] rounded-[8px] p-2">
          <img className="w-[16px] " src="/moon.svg" />
        </button>
      </div>
    </div>
  );
};
