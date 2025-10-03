import { Footer } from "@/app/_features/Footer";
import { GenreMovieList } from "@/app/_features/GenreMovieList";
import { Header } from "@/app/_features/Header";

export default function Genre() {
  return (
    <div className="w-[1440px]">
      <Header />
      <GenreMovieList />
      <Footer />
    </div>
  );
}
