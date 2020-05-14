import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Provider store={configureStore}>
    <HashRouter>
      <div className="App jumbotron">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
