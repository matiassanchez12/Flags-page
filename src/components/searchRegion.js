import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const FilterStyled = styled.div`
  @import url('https://fonts.google.com/specimen/Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  *{
    box-sizing:border-box;
  }
.mi-icon{
    margin-left: 10px;
}

div{
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  text-align: center;
  padding: 20px;
  position: relative;
  background: var(--white);
}

ul{
  border-radius: 4px;
  background-color: var(--background-el);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  background: var(--white);
  width: 100%;
  z-index: 99;
}

.button-close ul {
  display: none;
}
.button-open ul{
  display:block;
}

li{
  margin: 10px 0px;
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
    <FilterStyled className="button">
      <div
        className={`${dropdown ? 'button-open' : 'button-close'}`}
        onClick={() => setdropdown (!dropdown)}
        id="filter"
      >
        Filter by Region
        <i className="fas fa-chevron-down mi-icon" />
        <ul>
          <li onClick={() => onRegionChange ('Africa')}>Africa</li>
          <li onClick={() => onRegionChange ('Americas')}>Americas</li>
          <li onClick={() => onRegionChange ('Asia')}>Asia</li>
          <li onClick={() => onRegionChange ('Europe')}>Europe</li>
          <li onClick={() => onRegionChange ('Oceania')}>Oceania</li>
        </ul>
      </div>
    </FilterStyled>
  );
}

export default SearchRegion;
