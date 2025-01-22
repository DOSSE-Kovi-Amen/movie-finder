"use client";
import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: {
  movie: Movie;
}) {
  return (
    <Link href={`/film/${movie.imdbID}`} passHref>

      <div className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        {movie.Poster  && movie.Poster !== "N/A"&& <Image
          src={movie.Poster|| 'https://imageplaceholder.net/600x400'}
          alt={movie.Title}
          width={300}
          height={450}
          className="w-full h-64 object-cover"
        />}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-red-500 text-ellipsis overflow-hidden whitespace-nowrap">{movie.Title}</h2>
          <p className="text-sm text-gray-400">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}
