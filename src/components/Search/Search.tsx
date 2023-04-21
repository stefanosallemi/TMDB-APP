import React, { useState, useEffect } from 'react';

interface Props {
    onSearch: (query: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div>
            <div
                className='d-flex flex-row justify-content-around'
                style={{
                    transition: 'transform 0.3s ease-out',
                    transform: isScrolled ? 'translateY(100%)' : 'translateY(0)',
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    className='card'
                    style={{
                        padding: '0.1rem',
                        margin: '1rem',
                        borderRadius: '3rem',
                        boxShadow: '0 0 0.7rem #cdcdcd',
                        width: '18rem',
                        height: '4rem',
                    }}
                >
                    <div className='card-body' style={{ marginTop: '-0.35rem' }}>
                        <div
                            className='d-flex flex-row-reverse justify-content-between'
                            style={{ marginLeft: '-0.3rem' }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <input
                                        style={{
                                            fontWeight: "500",
                                            width: '16.3rem',
                                            height: '2.4rem',
                                            marginRight: '-0.3rem',
                                        }}
                                        type='text'
                                        placeholder='Cerca un film'
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className='form-control rounded-pill'
                                    />
                                    <button
                                        value='submit'
                                        type='submit'
                                        className='btn btn-primary rounded-pill'
                                        style={{
                                            fontWeight: "500",
                                            paddingLeft: '1rem',
                                            paddingRight: '1.1rem',
                                            height: '2.4rem',
                                            marginTop: '-4.2rem',
                                            marginLeft: '11.6rem',
                                            marginRight: '-1rem',
                                            zIndex: '1',
                                        }}
                                    >
                                        Cerca
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='d-flex flex-row justify-content-around'
                style={{
                    transition: 'transform 0.3s ease-out',
                    transform: isScrolled ? 'translateY(0)' : 'translateY(100%)',
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    className='card'
                    style={{
                        padding: '0.1rem',
                        margin: '1rem',
                        borderRadius: '3rem',
                        boxShadow: '0 0 0.7rem #cdcdcd',
                        width: '4rem',
                        height: '4rem',
                    }}
                >
                    <a href="#">
                        <img style={{marginLeft: "0.28rem", marginTop:"0.35rem"}} src="https://raw.githubusercontent.com/stefanosallemi/TMDB-APP/main/src/components/Search/arrow.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};
