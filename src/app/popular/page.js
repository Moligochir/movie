"use client";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
import { PopularMoviesList } from "../_features/PopularMoviesList";

export default function Home() {
  return (
    <div className="w-[1440px]">
      {<Header />}
      {<PopularMoviesList isDetails={true} />}
      {<Footer />}
    </div>
  );
}
