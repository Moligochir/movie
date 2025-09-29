"use client";
import Link from "next/link";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
import { TopRatedMoviesList } from "../_features/TopRatedMoviesList";

export default function Home() {
  return (
    <div className="">
      {<Header />}
      {<TopRatedMoviesList />}
      {<Footer />}
    </div>
  );
}
