
import Header2 from "@/components/Header2";
import MovieDetails from "@/components/MovieDetails";

async function getMovieDetails(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=19fffcc4`);
  const movie = await res.json();
  return movie;
}

export default async function MoviePage({ params }: {
  params: Promise<{ id: string }>;
}) {
  const movie = await getMovieDetails((await params).id);

  if (!movie || movie.Response === "False") {
    return <p className="text-center text-red-500 mt-10">Film introuvable</p>;
  }

  return <div className="bg-gray-900">
    <Header2 />
    <MovieDetails movie={movie} />;
  </div>
}
