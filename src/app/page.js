"use client";
import { useState } from "react";
import { Navbar } from "./_features/Navbar";
export default function Home() {
  const [step, setStep] = useState(1);

  return <>{step === 1 && <Navbar />}</>;
}
