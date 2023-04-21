import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";

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

const DataFilter = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [year, setYear] = useState<number | null>(null);
    const apiKey = "548f27d6b5190070c81de2b221563690";

    useEffect(() => {
        const fetchMovies = async () => {
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
            if (year) {
                url += `&primary_release_year=${year}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        };
        fetchMovies();
    }, [year]);

    return (
        <div>
            <label>
                Filtra per anno:
                <input
                    type="number"
                    min={1900}
                    max={new Date().getFullYear()}
                    value={year || ""}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                />
            </label>
            <div className='d-flex justify-content-center row' style={{ marginBottom: "6rem" }}>
                {movies.map((movie) => (
                    <Card id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} release_date={movie.release_date} original_language={movie.original_language} adult={movie.adult} />
                ))}
            </div>
        </div>
    );
};

export default DataFilter;