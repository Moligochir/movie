"use client";
import Link from 'PopularMovie/link'
import { Header } from "./_features/Header";
import { PopularMoviesList } from "./_features/PopularMoviesList";
import {Footer} from "./_features/Footer";

export default function PopularMovie() {
  return ( <Link href="/dashboard">Dashboard

    <div className="">
      {<Header />}
      {<PopularMoviesList />}
      {<Footer />}
    </div></Link>
  );
}
