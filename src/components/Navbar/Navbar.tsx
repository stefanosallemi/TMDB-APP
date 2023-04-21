import React from 'react';
import { ResultsCount } from '../ResultsCount/ResultsCount';

interface Props {
    totalResults: string;
}

export const Navbar: React.FC<Props> = ({ totalResults }) => {
    return (
        <nav
            className="navbar fixed-top"
            style={{
                background: "rgba(255, 255, 255, 0.19)",
                borderRadius: "0",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(15px)",
            }}
        >
            <div className="container-fluid d-flex" style={{ justifyContent: "space-between"}}>
                <a style={{ width: "50%", maxWidth: "20rem"}} href="./"><img style={{width: "100%"}} src="https://raw.githubusercontent.com/stefanosallemi/TMDB-APP/main/src/components/Navbar/tmdb.png" alt="tmdb-logo" /></a>
                    <ResultsCount total_results={totalResults} />

            </div>
        </nav>
    );
};
