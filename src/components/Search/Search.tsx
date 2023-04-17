import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
    onSearch: (query: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div className='d-flex flex-row justify-content-around'>
            <div className="card" style={{ padding: "0.1rem", margin: "2rem", borderRadius: "3rem", boxShadow: "0 0 0.7rem #cdcdcd", width: "18rem", height: "4rem", zIndex: 1, bottom: 0, position: "fixed" }}>
                <div className="card-body" style={{ marginTop: "-0.35rem" }}>
                    <div className='d-flex flex-row-reverse justify-content-between' style={{ marginLeft: "-0.3rem" }}>
                        <button type="submit" className="btn btn-primary rounded-pill" style={{ paddingBottom: "0.6rem", paddingLeft: "1rem", paddingRight: "1.1rem", height: "2.4rem", marginRight: "-0.25rem" }}>Cerca</button>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input style={{ width: "16.3rem", height: "2.4rem", marginRight: "-10rem" }}
                                    type="text"
                                    placeholder="Cerca un film"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)} className="form-control rounded-pill" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};