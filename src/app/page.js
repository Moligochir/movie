"use client";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { PopularMoviesList } from "./_features/PopularMoviesList";
import { TopRatedMoviesList } from "./_features/TopRatedMoviesList";
import { UpcomingMoviesList } from "./_features/UpcomingMoviesList";

export default function Home() {
  return (
    <div className="w-[1440px] m-auto">
      {<Header />}
      {<HeroSection />}
      {/* {<UpcomingMoviesList />}
      {<PopularMoviesList />}
      {<TopRatedMoviesList />} */}
      {/* <MovieCard title={"Upcoming"} />
      <MovieCard title={"Popular"} />
      <MovieCard title={"Top Rated"} /> */}
      {/* {<Footer />} */}
    </div>
  );
}
