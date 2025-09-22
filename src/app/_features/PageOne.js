"use client";
import { useState } from "react";
import { FormMovie } from "../_components/form-movie";
export const PageOne = (props) => {
  return (
    <div className="flex text-[16px] w-full justify-between pl-20 pr-20">
      <div className="flex gap-2">
        <img src="./movieZ.svg" />
        <button className="text-[#4338CA]">Movie Z</button>
      </div>
      <div className="flex gap-6 ">
        <div className="flex gap-2 text-[#18181B] border border-[#E4E4E7]">
          <img src="./Genre.svg" />
          <button className="">Genre</button>
        </div>
        <div className="flex gap-2 text-[#09090B]">
          <img src="./search.svg" />
          <input className="text-[#71717A]" placeholder="Search.."></input>
        </div>
      </div>
      <button className="text-[#18181B]">
        <img src="./moon.svg" />
      </button>
    </div>
  );
};
