"use client";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { useFilter } from "@/context/FilterContext";
import Header2 from "@/components/Header2";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/types/movie";

async function fetchMovies(genre: string, year: string, page: number) {
  const url = `https://www.omdbapi.com/?s=${genre || 'action'}&y=${year || ''}&type=movie&page=${page}&apikey=19fffcc4`;
  const res = await fetch(url);
  const data = await res.json();
  return data.Search || [];
}

export default function Home() {
  const { genre, year, setGenre, setYear } = useFilter(); // Correct usage of useFilter
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // Crée une liste d'années de 1940 à 2025
  const years = Array.from({ length: 2025 - 1940 + 1 }, (_, i) => 1940 + i);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(genre, year, currentPage);
      console.log('=================fet===================');
      console.log(fetchedMovies);
      console.log('====================================');
      setMovies(fetchedMovies);
      setTotalPages(8); // Simulate pagination - adjust as needed
    };
    getMovies();
  }, [genre, year, currentPage]);

  return (
    <div>
      <Header2 />

      <div className="relative bg-gray-900 text-white border-t-4 border-red-500">
        <div className="container mx-auto px-4 py-10 mt-10">
        <SearchBar />

        <h1 className="text-2xl mt-4 font-bold text-center mb-6">Total de films pour la page {movies.length}</h1>

          {/* Filtres */}
          <div className="flex justify-center space-x-4 mb-6">
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)} // Directly set the genre
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              <option value="">Tous les genres</option>
              <option value="action">Action</option>
              <option value="comedy">Comédie</option>
              <option value="drama">Drame</option>
              <option value="horror">Horreur</option>
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)} // Directly set the year
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              <option value="">Toutes les années</option>
              {years.reverse().map((yearOption) => (
                <option key={yearOption} value={yearOption}>
                  {yearOption}
                </option>
              ))}
            </select>
          </div>

          {/* Liste des films */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {movies.map((movie: Movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Précédent
            </button>
            <span className="text-white">{currentPage} / {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
