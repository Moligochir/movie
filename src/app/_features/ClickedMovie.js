import { HeroSlide } from "../_components/HeroSlide"
import { useEffect, useState } from "react";
import {useParams} from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const ClickedMovie = (props) => {
    const param = useParams()
     const {id} = param;
     const apiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
   
     const getData = async () => {
       const data = await fetch(apiLink, options);
       const jsonData = await data.json();
    //    setMovies(jsonData.results);
       console.log(jsonData);
       
       
     };
       useEffect(() => {
       getData();
     }, [id]);
   
     if(!id) {
       return(
         <div>Something wrong!!!</div>
       )
     } 
    return (
        <div>
        </div>
    )
}