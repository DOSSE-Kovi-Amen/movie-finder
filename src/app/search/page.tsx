"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MovieCard from "@/components/MovieCard";
import Header2 from "@/components/Header2";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/types/movie";

async function fetchSearchResults(query: string) {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=19fffcc4`);
    const data = await res.json();
    return data.Search || [];
}

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (query) {
            setLoading(true);
            fetchSearchResults(query).then((results) => {
                setMovies(results);
                setLoading(false);
            });
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
            <Header2 />
            <div className="mt-10">
                <SearchBar />
            </div>

            <h1 className="text-3xl mt-10 font-bold text-center text-red-500">
                <h1 className="text-3xl mt-10 font-bold text-center text-red-500">
                    Résultats pour &quot;{query}&quot;
                </h1>

            </h1>

            {loading ? (
                <p className="text-center mt-6">Chargement...</p>
            ) : movies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-6 text-gray-400">Aucun résultat trouvé</p>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <SearchContent />
        </Suspense>
    );
}
