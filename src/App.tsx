import React, { useState } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search';
import 'bootstrap/dist/css/bootstrap.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=548f27d6b5190070c81de2b221563690&query=${query}`
    );
    setMovies(response.data.results);
  };

  return (<div>
    <Search onSearch={handleSearch} />
    <div className='d-flex justify-content-center row'>
      {movies.map((movie) => (
        <Card id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} />
      ))}
    </div>
  </div>
  );
};

export default App;
