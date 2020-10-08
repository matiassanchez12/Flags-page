import React, {useEffect} from 'react';
import './styles/country-list.css';
import Country from './country';
import {useDispatch, useSelector} from 'react-redux';

function Countrylist () {
  //1:PASO DEL DISPATCH LOS DATOS DE LA API A MI ACTION
  //2:DESDE APP, DONDE ESTA MI STORE, SETEO LOS DATOS TOMADOS ENEL ARRAY "COUNTRYLIST"
  //3:VUELVO ACA Y USESELECTOR VA A RENDERIZAR LOS DATOS QUE ENCUENTRE EN MI ARRAY "COUNTRYLIST"

  const dispatch = useDispatch (); //sirve para manejar los datos del state de action

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
      fetch ('https://restcountries.eu/rest/v2/all')
        .then (response => {
          return response.json ();
        })
        .then (list => {
          //LE PASO LA LIST A ACTION
          dispatch ({
            type: 'SET_COUNTRY_LIST',
            payload: list,
          });
        })
        .catch (() => {
          console.log ('hubo un error!!');
        });
    },
    [dispatch]
  );

  return (
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
          />
        );
      })}

    </div>
  );
}

export default Countrylist;
