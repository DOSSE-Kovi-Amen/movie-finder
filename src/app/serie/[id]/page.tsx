import { notFound } from "next/navigation";

async function fetchMovieDetails(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=19fffcc4`);
  const data = await res.json();

  if (data.Response === "False") return null;
  return data;
}

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id);

  if (!movie) {
    return notFound(); // Affiche une page 404 si le film n'existe pas
  }

  return (
    <div className="container mx-auto px-4 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{movie.Title} ({movie.Year})</h1>
          <p className="text-lg"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="text-lg"><strong>Réalisateur:</strong> {movie.Director}</p>
          <p className="text-lg"><strong>Acteurs:</strong> {movie.Actors}</p>
          <p className="text-lg"><strong>Durée:</strong> {movie.Runtime}</p>
          <p className="text-lg"><strong>Synopsis:</strong> {movie.Plot}</p>
          <p className="text-lg"><strong>Note IMDb:</strong> ⭐ {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
