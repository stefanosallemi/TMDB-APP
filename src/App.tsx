import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";
import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search';
import { Navbar } from './components/Navbar/Navbar';
import { Tranding } from './components/Tranding/Tranding';
import ConnectionCheck from './components/ConnectionCheck/ConnectionCheck';
import AuthModal from './components/AuthModal/AuthModal';
import { Container, Alert } from 'react-bootstrap';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  release_date: string;
  original_language: string;
  adult: boolean;
  total_results: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState<string>('');
  const [hideDiv, setHideDiv] = useState(false);

  const [tranding, setTranding] = useState<Movie[]>([]);
  const [kids, setKids] = useState<Movie[]>([]);
  const [best, setBest] = useState<Movie[]>([]);

  const [hideSkTranding, SethideSkTranding] = useState(false);
  const [hideSkKids, SethideSkKids] = useState(false);
  const [hideSkBest, SethideSkBest] = useState(false);

  const API_KEY = "548f27d6b5190070c81de2b221563690";

  const handleSearch = async (query: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    setMovies(response.data.results);
    setTotalResults(response.data.total_results);
    setHideDiv(true);
  };

  useEffect(() => {
    const fetchTranding = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
      );
      setTranding(response.data.results);
      SethideSkTranding(true);
    };
    fetchTranding();
  }, []);

  useEffect(() => {
    const fetchKids = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`
      );
      setKids(response.data.results);
      SethideSkKids(true);
    };
    fetchKids();
  }, []);

  useEffect(() => {
    const fetchBest = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${API_KEY}`
      );
      setBest(response.data.results);
      SethideSkBest(true);
    };
    fetchBest();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "6rem" }}>
        <ConnectionCheck />
      </div>
      <Navbar totalResults={totalResults} />
      <Search onSearch={handleSearch} />
      <div>
        {!hideDiv && (
          <div>
            <h1 style={{ fontWeight: "800", fontSize: "3rem", marginBottom: "0rem", marginLeft: "1rem", marginTop: "-2rem" }}>Popolari</h1>
            <div style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
              <div className='d-flex row' style={{ width: "300rem", marginLeft: "0rem", marginRight: "0rem" }}>
                {!hideSkTranding && (
                  <div className="card col" style={{ borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                    <div className='card placeholder-glow' style={{ width: "12rem" }}>
                      <span className='placeholder' style={{ padding: "6rem", height: "16rem", borderRadius: "1.5rem" }}>
                      </span>
                      <div className="card-body">
                        <div className='row' style={{ bottom: "0" }}>
                          <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tranding.map((tranding) => (
                  <Tranding id={tranding.id} title={tranding.title} poster_path={tranding.poster_path} overview={tranding.overview} vote_average={tranding.vote_average} release_date={tranding.release_date} original_language={tranding.original_language} adult={tranding.adult} />
                ))}
              </div>
            </div>

            <h1 style={{ fontWeight: "800", fontSize: "3rem", marginBottom: "0rem", marginLeft: "1rem" }}>Per Bambini</h1>
            <div style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
              <div className='d-flex row' style={{ width: "300rem", marginLeft: "0rem", marginRight: "0rem" }}>
                {!hideSkKids && (
                  <div className="card col" style={{ borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                    <div className='card placeholder-glow' style={{ width: "12rem" }}>
                      <span className='placeholder' style={{ padding: "6rem", height: "16rem", borderRadius: "1.5rem" }}>
                      </span>
                      <div className="card-body">
                        <div className='row' style={{ bottom: "0" }}>
                          <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {kids.map((kids) => (
                  <Tranding id={kids.id} title={kids.title} poster_path={kids.poster_path} overview={kids.overview} vote_average={kids.vote_average} release_date={kids.release_date} original_language={kids.original_language} adult={kids.adult} />
                ))}
              </div>
            </div>

            <h1 style={{ fontWeight: "800", fontSize: "3rem", marginBottom: "0rem", marginLeft: "1rem" }}>I più votati</h1>
            <div style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
              <div className='d-flex row' style={{ width: "300rem", marginLeft: "0rem", marginRight: "0rem" }}>
                {!hideSkBest && (
                  <div className="card col" style={{ borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                    <div className='card placeholder-glow' style={{ width: "12rem" }}>
                      <span className='placeholder' style={{ padding: "6rem", height: "16rem", borderRadius: "1.5rem" }}>
                      </span>
                      <div className="card-body">
                        <div className='row' style={{ bottom: "0" }}>
                          <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {best.map((bests) => (
                  <Tranding id={bests.id} title={bests.title} poster_path={bests.poster_path} overview={bests.overview} vote_average={bests.vote_average} release_date={bests.release_date} original_language={bests.original_language} adult={bests.adult} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 style={{ fontWeight: "800", fontSize: "3rem", marginBottom: "-0.5rem", marginLeft: "1rem", marginTop: "0.5rem" }}>Risultati</h1>
        <div className='d-flex justify-content-center row' style={{ marginBottom: "6rem" }}>
          {movies.map((movie) => (
            <Card id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} release_date={movie.release_date} original_language={movie.original_language} adult={movie.adult} />
          ))}
          {!hideDiv && (
            <div className='d-flex justify-content-center row' style={{ marginBottom: "0rem" }}>
              <div className="card placeholder-glow" style={{ width: "20rem", borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                <span className='placeholder' style={{ padding: "6rem", borderRadius: "1.5rem", height: "25rem", width: "18.4rem" }}>
                </span>
                <div className="card-body">
                  <div style={{ marginLeft: "-1rem", marginBottom: "1rem" }}>
                    <h5 style={{ fontWeight: "bold" }} className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                  <div className='row' style={{ bottom: "0" }}>
                    <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                    </button>
                  </div>
                </div>
              </div>
              <div className="card placeholder-glow" style={{ width: "20rem", borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                <span className='placeholder' style={{ padding: "6rem", borderRadius: "1.5rem", height: "25rem", width: "18.4rem" }}>
                </span>
                <div className="card-body">
                  <div style={{ marginLeft: "-1rem", marginBottom: "1rem" }}>
                    <h5 style={{ fontWeight: "bold" }} className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                  <div className='row' style={{ bottom: "0" }}>
                    <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                    </button>
                  </div>
                </div>
              </div>
              <div className="card placeholder-glow" style={{ width: "20rem", borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                <span className='placeholder' style={{ padding: "6rem", borderRadius: "1.5rem", height: "25rem", width: "18.4rem" }}>
                </span>
                <div className="card-body">
                  <div style={{ marginLeft: "-1rem", marginBottom: "1rem" }}>
                    <h5 style={{ fontWeight: "bold" }} className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                  <div className='row' style={{ bottom: "0" }}>
                    <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                    </button>
                  </div>
                </div>
              </div>
              <div className="card placeholder-glow" style={{ width: "20rem", borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }}>
                <span className='placeholder' style={{ padding: "6rem", borderRadius: "1.5rem", height: "25rem", width: "18.4rem" }}>
                </span>
                <div className="card-body">
                  <div style={{ marginLeft: "-1rem", marginBottom: "1rem" }}>
                    <h5 style={{ fontWeight: "bold" }} className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                  <div className='row' style={{ bottom: "0" }}>
                    <button className="btn btn-primary rounded-pill col disabled placeholder col-6">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
