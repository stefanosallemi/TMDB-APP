import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CircularProgressWithLabel } from '../Vote/Vote';
import { Modal_card } from '../Modal/Modal';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    release_date: string;
    original_language: string;
    adult: boolean;
}

export const Tranding: React.FC<Movie> = ({ id, title, poster_path, overview, vote_average, release_date, original_language, adult }) => {
    if (title === "") {
        title = "Nessun Titolo";
    }
    return (
        <div className="card col" style={{ borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }} key={id}>
            {poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="card-img-top" style={{ borderRadius: "1.5rem", height: "16rem" }} />
            ) : (
                <img src="https://raw.githubusercontent.com/stefanosallemi/TMDB-APP/main/src/components/Card/default.webp" alt="Copertina non disponibile" className="card-img-top" style={{ borderRadius: "1.5rem", height: "16rem" }} />
            )}
            <div className="card-body">
                <div className='row' style={{ bottom: "0" }}>
                    <Modal_card id={id} title={title} poster_path={poster_path} overview={overview} vote_average={vote_average} release_date={release_date} original_language={original_language} adult={adult} />
                    <button className="btn rounded-pill" style={{ marginRight: "-1rem", marginBottom: "-1rem", marginTop: "-0.8rem", width: "5rem", borderColor: "transparent" }}>
                        <CircularProgressWithLabel value={parseInt(vote_average) * 10} />
                    </button>
                </div>
            </div>
        </div>
    )
}
