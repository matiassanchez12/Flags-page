import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import CountryList from './components/country-list';
import Reducer from './components/reducer';
import ActionList from './components/action-list';

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
};

const store = createStore (Reducer, initialState);

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <i className="far fa-moon" />
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}
export default App;
