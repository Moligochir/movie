"use client";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
import { UpcomingMoviesList } from "../_features/UpcomingMoviesList";
import { NextPageButton } from "../_features/NextPageButton";

export default function Home() {
  return (
    <div className="w-[1440px]">
      {<Header />}
      {<UpcomingMoviesList isDetails={true} />}
      {<NextPageButton />}
      {<Footer />}
    </div>
  );
}
