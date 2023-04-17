import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
}
export const Card: React.FC<Props> = ({ id, title, poster_path, overview, vote_average }) => {
    if (overview === "") {
        overview = "Nessuna descrizione";
    }
    const shortOverview = overview.slice(0, 70) + "...";

    return (
        <div className="card" style={{ width: "17rem", borderRadius: "2rem", paddingTop: "0.7rem", margin: "1rem" }} key={id}>
    {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="card-img-top" style={{ borderRadius: "1.5rem" }} />
    ) : (
        <img src="/Card/default.webp" alt="Copertina non disponibile" className="card-img-top" style={{ borderRadius: "1.5rem" }} />
    )} 
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {shortOverview}
                </p>
                <div className='row justify-content-between' style={{bottom: "0"}}>
                    <a href="#" className="btn btn-primary rounded-pill col">
                        Mostra
                    </a>
                    <a href="#" className="btn btn-success rounded-pill col">
                        {parseInt(vote_average)}/10
                    </a>
                </div>
            </div>

        </div>
    )
}
