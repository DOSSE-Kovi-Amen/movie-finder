"use client";
// src/context/FilterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  genre: string;
  year: string;
  setGenre: (genre: string) => void;
  setYear: (year: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  return (
    <FilterContext.Provider value={{ genre, year, setGenre, setYear }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
