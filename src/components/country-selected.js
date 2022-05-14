import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  h2 {
    font-size: 1.5em;
  }
  p {
    font-size: 1em;
  }
  img {
    height: 100%;
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: 0.5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ",";
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`;

function CountrySelected(props) {
  const country = props.country;
  if (!country) return <h2>No se encontraron datos</h2>;

  return (
    <CountrySelectedStyled>
      <img src={country.flag} alt="" />
      <div>
        <h2>{country.name}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native Name:</strong>
              {country.nativeName}
            </p>
            <p>
              <strong>Population:</strong>
              {country.population}
            </p>
            <p>
              <strong>Region:</strong>
              {country.region}
            </p>
            <p>
              <strong>Sub Region:</strong>
              {country.subRegion}
            </p>
            <p>
              <strong>Capital:</strong>
              {country.capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top level Domain:</strong>
              {country.topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>
              {country.currencies.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
            </p>
            <p className="languages">
              <strong>Languages:</strong>
              {country.languages.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
        {country.borders && (
          <>
            <p className="borders">
              <strong>Border Countries:</strong>
            </p>
            {country.borders.map((item) => (
              <span key={item} className="border-item">
                {item}
              </span>
            ))}
          </>
        )}
      </div>
    </CountrySelectedStyled>
  );
}

export default CountrySelected;
