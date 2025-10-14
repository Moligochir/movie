import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { SearchMovieList } from "@/app/_features/SearchMovieList";

export default function Home() {
  return (
    <div className="w-[1440px]">
      <Header />
      <SearchMovieList />
      <Footer />
    </div>
  );
}
