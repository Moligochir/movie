"use client";
import { useState } from "react";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-[1440px] m-auto">
      {<Header />}
      {<HeroSection />}
      {/* {<MovieList />} */}
      {/* {<MovieList />} */}
      {/* {<MovieList/>} */}
      {/* {<Footer />} */}
    </div>
  );
}
