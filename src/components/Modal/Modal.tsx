import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CircularProgressWithLabel } from '../Vote/Vote';
import FlagEmoji from '../FlagEmoji/FlagEmoji';
import './style.css';

interface Props {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    release_date: string;
    original_language: string;
    adult: boolean;
}

export const Modal_card: React.FC<Props> = ({ id, title, poster_path, overview, vote_average, release_date, original_language, adult }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-primary rounded-pill col" onClick={handleShow}>
                Mostra
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="border-radius-5"
            >
                <Modal.Header style={{borderColor: "transparent", marginBottom: "-1rem"}}>
                    <Modal.Title style={{fontWeight: "bold"}}>{title}</Modal.Title>
                    <button className="btn rounded-pill" style={{ marginRight: "-1rem", marginTop: "0.5rem", width: "5rem", borderColor: "transparent" }}>
                        <CircularProgressWithLabel value={parseInt(vote_average) * 10} />
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: "inline-block" }}>
                        {poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={title}
                                className="card-img-top"
                                style={{ borderRadius: "1.5rem", width: "10rem", height: "14rem", float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                            />
                        ) : (
                            <img
                                src="https://raw.githubusercontent.com/stefanosallemi/TMDB-APP/main/src/components/Card/default.webp"
                                alt="Copertina non disponibile"
                                className="card-img-top"
                                style={{ borderRadius: "1.5rem", width: "10rem", height: "14rem", float: "left", marginRight: "1rem", marginBottom: "1rem" }}
                            />
                        )}
                        <h5 style={{ color: "black" }}>
                            <h6 style={{fontWeight: "bold", color: "grey" }}>{release_date}</h6>
                            {overview}
                        </h5>
                        <p>Lingua Originale: <FlagEmoji language={original_language} /></p>
                        <p>Adatto ai bambini: {adult ? (
                            <span role="img" aria-label="Thumbs up">
                                👎
                            </span>
                        ) : (
                            <span role="img" aria-label="Thumbs down">
                                👍
                            </span>
                        )}</p>
                    </div>
                </Modal.Body>

                <Modal.Footer style={{borderColor: "transparent", marginTop: "-2rem"}}>
                    <Button variant="secondary" className="btn rounded-pill" onClick={handleClose}>
                        Chiudi
                    </Button>
                    <button className="btn btn-primary rounded-pill" onClick={handleShow}>
                        Salva
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}