import React from 'react';
import './styles/country.css';

function Country({flag, name, population, region, capital}) {
  return (
    <div className="container">
      <h2>{name}</h2>
      <img src={flag} alt="flag" />
      <div loading="lazy" className="details">
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Capital: </strong>{capital}</p>
      </div>
    </div>
  );
}

export default Country;
