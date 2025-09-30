"use client";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { PopularMoviesList } from "./_features/PopularMoviesList";
import { TopRatedMoviesList } from "./_features/TopRatedMoviesList";
import { UpcomingMoviesList } from "./_features/UpcomingMoviesList";
import { Footer } from "./_features/Footer";

export default function Home() {
  return (
    <div className="w-[100%]">
      {<Header />}
      {<HeroSection />}
      {<UpcomingMoviesList />}
      {<PopularMoviesList />}
      {<TopRatedMoviesList />}
      {<Footer />}
    </div>
  );
}
