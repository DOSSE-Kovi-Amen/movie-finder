const fetchMovies = async (genre: string, year: string, page: number) => {
    const url = `https://www.omdbapi.com/?s=${genre}${year ? `&y=${year}` : ''}&page=${page}&apikey=19fffcc4`;
    const res = await fetch(url);
    const data = await res.json();
    return data.Search || [];
  };
  
  export default fetchMovies;
  