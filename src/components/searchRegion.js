import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const FilterStyled = styled.div`
  *{
    box-sizing: border-box;
}
border: 1px solid grey;
    padding: 0;
    cursor:pointer;
.mi-icon{
    text-align: end;
    position: relative;
    left: 20px;
}
li{
    border: 1px solid grey;
    text-decoration: none;
}
li:hover{
    background-color: greenyellow;
}
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.button-open li{
    display: block;
}
.button-close li{
   display:none;
}
`;

const filterByRegionAction = regionSelected => {
  return {
    type: 'FILTER_BY_REGION',
    payload: {regionSelected},
  };
};

function SearchRegion (props) {
  const dispatch = useDispatch ();
  const [dropdown, setdropdown] = useState (false);
  const filterByRegion = useSelector (state => state.filterByRegion);

  console.log ('este es el estado de la lista filtrada:', filterByRegion);

  const onRegionChange = e => {
    dispatch (filterByRegionAction (e));
  };

  return (
    <FilterStyled
      className="button"
      onClick={() => setdropdown (!dropdown)}
      id="filter"
    >
      Filter by Region
      <i className="fas fa-chevron-down mi-icon" />
      <ul className={`${dropdown ? 'button-open' : 'button-close'}`}>
        <li onClick={() => onRegionChange ('Africa')}>Africa</li>
        <li onClick={() => onRegionChange ('Americas')}>Americas</li>
        <li onClick={() => onRegionChange ('Asia')}>Asia</li>
        <li onClick={() => onRegionChange ('Europe')}>Europe</li>
        <li onClick={() => onRegionChange ('Oceania')}>Oceania</li>
      </ul>
    </FilterStyled>
  );
}

export default SearchRegion;
