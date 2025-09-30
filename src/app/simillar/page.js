"use client";
import Link from "next/link";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
import { SimillarMovieList } from "../_features/SimiliarMovieList";

export default function Home() {
  return (
    <div className="">
      {<Header />}
      {< SimillarMovieList/>}
      {<Footer />}
    </div>
  );
}
