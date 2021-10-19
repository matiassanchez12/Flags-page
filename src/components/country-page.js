import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import {useSelector} from 'react-redux';
import CountrySelected from './country-selected';
import SkeletonLoadingPage from './skeleton-page';

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function CountryPage({match, history}) {
  let DBcountry = useSelector (state =>
    state.countryList.find (item => item.alpha2Code === match.params.id)
  );

  const [country, setCountry] = useState (DBcountry);
  const [isLoading, setIsLoading] = useState (true);

  setTimeout (() => {
    setIsLoading (false);
  }, 5000);

  useEffect (
    () => {
      if (!country) {
        setIsLoading (true);
        setTimeout (() => {
          fetch (
                       `https://restcountries.com/v2/alpha/${match.params.id.toLowerCase ()}`
          )
            .then (response => {
              response.json ();
              setIsLoading (false);
            })
            .then (data => {
              setIsLoading (false);
              setCountry (data);
            });
        }, 3000);
      }
    },
    [country, match.params.id]
  );

  function handleClick () {
    history.goBack ();
  }
  if (isLoading) {
    return (
      <CountryPageStyled>
        <Wrapper>
          <button className="back" onClick={handleClick}>
            <i className="fas fa-long-arrow-alt-left" /> Back
          </button>
          <SkeletonLoadingPage />;
        </Wrapper>
      </CountryPageStyled>
    );
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left" /> Back
        </button>
        <CountrySelected country={country} />
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
