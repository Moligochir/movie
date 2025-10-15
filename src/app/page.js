"use client";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { PopularMoviesList } from "./_features/PopularMoviesList";
import { TopRatedMoviesList } from "./_features/TopRatedMoviesList";
import { UpcomingMoviesList } from "./_features/UpcomingMoviesList";
import { Footer } from "./_features/Footer";
import { SearchInput } from "./_components/SearchInput";

export default function Home() {
  return (
    <div className="sm:w-[1440px] m-auto max-sm:bg-amber-100">
      <Header />
      {/* <HeroSection />
      <UpcomingMoviesList />
      <PopularMoviesList />
      <TopRatedMoviesList />
      <Footer /> */}
      {/* <SearchInput /> */}
    </div>
  );
}
