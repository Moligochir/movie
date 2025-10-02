import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { SimillarMovieList } from "@/app/_features/SimiliarMovieList";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Header />
      <SimillarMovieList isDetails={true} />
      <Footer />
    </div>
  );
}
