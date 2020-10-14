import React from 'react';
import {useHistory} from 'react-router-dom';
import slugify from 'slugify';

import './styles/country.css';

function Country({flag, name, population, region, capital, alpha2Code}) {
  const history = useHistory ();

  function handleClick () {
    history.push (`/country/${slugify (alpha2Code)}`);
  }

  return (
    <div className="mainDiv" onClick={handleClick}>
      <img src={flag} alt="flag" />
      <div className="details">
        <h2>{name}</h2>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Capital: </strong>{capital}</p>
      </div>
    </div>
  );
}

export default Country;
