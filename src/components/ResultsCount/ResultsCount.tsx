import React from 'react';

interface Props {
  total_results: string;
}

export const ResultsCount: React.FC<Props> = ({ total_results }) => {
  const displayResults = total_results >= '10000' ? 'Troppi' : total_results;

  return (
    <div>
      <button className="btn btn-secondary rounded-pill disabled col">
        Risultati: {displayResults}
      </button>
    </div>
  );
};
