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
    
      const shortOverview = overview.slice(0, 80) + "...";
    
    return (
        <div className="card d-inline-flex" style={{ width: "16rem", paddingRight: "2rem", borderRadius: "2rem", margin: "1rem" }} key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title} className="card-img-top" style={{ margin: "1rem", borderRadius: "1.5rem" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {shortOverview}
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                    Mostra
                </a>
                <a href="#" className="btn btn-success rounded-pill">
                {parseInt(vote_average)}/10
                </a>
            </div>

    </div>
    )
}
