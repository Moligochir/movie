"use client";
import Link from "next/link";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
import { PopularMoviesList } from "../_features/PopularMoviesList";

export default function Home() {
  return (
    <div className="">
      {<Header />}
      {<PopularMoviesList />}
      {<Footer />}
    </div>
  );
}
