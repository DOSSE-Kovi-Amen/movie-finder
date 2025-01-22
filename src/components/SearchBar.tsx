"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <motion.div
            className="relative mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
        >
            <div className="relative w-[300px] md:w-[400px] lg:w-[500px]">
                {/* Input avec padding à droite pour ne pas cacher le bouton */}
                <input
                    type="text"
                    placeholder="Rechercher un film ou une série..."
                    className="w-full px-5 py-3 pr-12 text-black rounded-full outline-none shadow-md
      focus:ring-4 transition-all duration-300 focus:ring-red-500 placeholder-gray-500 bg-white/80 backdrop-blur-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />

                {/* Bouton de recherche à l'intérieur de l'input, à droite */}
                <button
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white
      p-2 rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                >
                    <FaSearch className="text-lg" />
                </button>
            </div>
        </motion.div>


    );
}
