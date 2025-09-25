"use client";
import { useEffect } from "react";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { MovieList } from "./_features/MovieList";

// const apiLink =
//   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
//   },
// };

export default function Home() {
  // const [count, setCount] = useState(0);
  // const getData = async () => {
  //   const data = await fetch(apiLink, optoins);
  //   const jsonData = await data.json();
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="w-[1440px] m-auto">
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button> */}
      {<Header />}
      {<HeroSection />}
      {/* {<MovieList title={"Upcoming"} />} */}
      {<MovieList />}
      {/* {<MovieList/>} */}
      {/* {<Footer />} */}
    </div>
  );
}
