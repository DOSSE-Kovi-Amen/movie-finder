"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet de défilement pour changer le background du menu
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <header className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpg" // Remplace avec ton image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50 blur-sm" // Ajout du flou et assombrissement
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay noire semi-transparente */}
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 z-50 ${
          isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/">
               <div className="text-white text-2xl font-bold">Movie<i className="text-red-600">Finder</i></div>
        </Link>

        {/* Menu */}
        <Menu /> {/* Inclure le menu */}


        {/* Bouton Connexion */}
        <button className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700">
          Connexion
        </button>
      </nav>

        {/* Titre avec animation */}
        <motion.div
        className="absolute bottom-20 left-10 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Bienvenue sur Movie<i className="text-red-500">Finder</i> 
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-2 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Découvrez les meilleurs films et séries
        </motion.p>

        {/* Barre de recherche avec animation scintillante */}
        <SearchBar />

      </motion.div>
    </header>
  );
}
