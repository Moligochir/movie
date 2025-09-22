"use client";
import { useState } from "react";
import { PageOne } from "./_features/PageOne";
export default function Home() {
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  return <>{step === 1 && <PageOne />}</>;
}
