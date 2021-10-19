import React, {useEffect, useState} from 'react';
import Country from './country';
import {useSelector, useDispatch} from 'react-redux';
import Wrapper from './wrapper';
import styled from 'styled-components';
import LoadingSke from './skeleton';

const CountryListStyled = styled.div`
.container-list{
  display: grid;
  grid-row-gap: 2.3em;
  row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
}

`;

function Countrylist () {
  //1:PASO DEL DISPATCH LOS DATOS DE LA API A MI ACTION
  //2:DESDE APP, DONDE ESTA MI STORE, SETEO LOS DATOS TOMADOS ENEL ARRAY "COUNTRYLIST"
  //3:VUELVO ACA Y USESELECTOR VA A RENDERIZAR LOS DATOS QUE ENCUENTRE EN MI ARRAY "COUNTRYLIST"
  const dispatch = useDispatch ();

  const [isLoading, setIsLoading] = useState (false);

  const countryListByName = useSelector (state => state.countryListByName);

  const countryList = useSelector (state => {
    if (state.filterByRegion !== '' && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  useEffect (
    () => {
      setIsLoading (true);
      setTimeout (() => {
        fetch ('https://restcountries.eu/rest/v3.1/all')
          .then (response => {
            setIsLoading (false);
            return response.json ();
          })
          .then (list => {
            setIsLoading (false);
            //LE PASO LA LIST A ACTION
            dispatch ({
              type: 'SET_COUNTRY_LIST',
              payload: list,
            });
          })
          .catch (() => {
            setIsLoading (false);
            console.log ('hubo un error!!');
          });
      }, 3000);
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <Wrapper>
        <CountryListStyled>
          <LoadingSke />
        </CountryListStyled>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CountryListStyled>
        <div className="container-list">
          {countryList.map (country => {
            return (
              <Country
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={country.name}
                alpha2Code={country.alpha2Code}
              />
            );
          })}
        </div>
      </CountryListStyled>
    </Wrapper>
  );
}

export default Countrylist;
