import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import CountryList from './components/country-list';
import Reducer from './components/reducer';
import ActionList from './components/action-list';
import Footer from './components/footer';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import CountryPage from './components/country-page';
const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
};

const store = createStore (Reducer, initialState);

function App () {
  const [darkMode, setDarkMode] = useState (false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Footer setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}
export default App;
