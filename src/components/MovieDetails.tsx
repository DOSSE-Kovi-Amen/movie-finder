"use client";

import { motion } from "framer-motion";

interface MovieDetailsProps {
  movie: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    BoxOffice: string;
    Production: string;
  };
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen px-8 pt-16">
      {/* Image en arrière-plan */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${movie.Poster})` }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-8">
        {/* Affiche du film */}
        <motion.img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Détails du film */}
        <div className="mt-6 md:mt-0">
          <motion.h1
            className="text-4xl font-bold text-red-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {movie.Title} <span className="text-gray-400">({movie.Year})</span>
          </motion.h1>

          <p className="text-gray-400 mt-2">{movie.Genre} • {movie.Runtime} • {movie.Rated}</p>

          {/* Synopsis */}
          <motion.p
            className="mt-4 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {movie.Plot}
          </motion.p>

          {/* Infos supplémentaires */}
          <div className="mt-6 space-y-2">
            <p><strong className="text-red-400">Réalisateur:</strong> {movie.Director}</p>
            <p><strong className="text-red-400">Scénariste:</strong> {movie.Writer}</p>
            <p><strong className="text-red-400">Acteurs:</strong> {movie.Actors}</p>
            <p><strong className="text-red-400">Langues:</strong> {movie.Language}</p>
            <p><strong className="text-red-400">Pays:</strong> {movie.Country}</p>
            <p><strong className="text-red-400">Récompenses:</strong> {movie.Awards}</p>
          </div>

          {/* Notes & Box Office */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-400">IMDB</p>
              <p className="text-2xl font-bold text-yellow-400">{movie.imdbRating}</p>
              <p className="text-gray-500 text-sm">{movie.imdbVotes} votes</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-400">Metascore</p>
              <p className="text-2xl font-bold text-green-400">{movie.Metascore}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-400">Box Office</p>
              <p className="text-2xl font-bold text-blue-400">{movie.BoxOffice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
