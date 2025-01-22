"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");

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
    <header className="relative w-full">
      {/* Image en arrière-plan */}

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

    </header>
  );
}
