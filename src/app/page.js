"use client";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { PopularMoviesList } from "./_features/PopularMoviesList";
import { TopRatedMoviesList } from "./_features/TopRatedMoviesList";
import { UpcomingMoviesList } from "./_features/UpcomingMoviesList";
import { Footer } from "./_features/Footer";
import { Genre, GenreButton } from "./_components/GenreButton";
import { GenreMovieList } from "./_features/GenreMovieList";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Header />
      <HeroSection />
      <UpcomingMoviesList />
      <PopularMoviesList />
      <TopRatedMoviesList />
      <Footer />
      
    </div>
  );
}
