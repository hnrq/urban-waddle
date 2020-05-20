import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import { Provider } from "react-redux";
import configureStore from "configureStore";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import TodoModalContainer from "containers/TodoModalContainer/TodoModalContainer";
import { createHashHistory } from "history";
import { auth } from "firebaseConfig";

const customHistory = createHashHistory();

auth.onAuthStateChanged((user) =>
  user ? customHistory.push("/") : customHistory.push("/login")
);

const App = () => (
  <Provider store={configureStore}>
    <ToastContainer />
    <HashRouter history={customHistory}>
      <div className="app jumbotron pt-3">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/new-todo" component={HomePage} />
        </Switch>
      </div>
      <Route path="/new-todo" component={TodoModalContainer} />
    </HashRouter>
  </Provider>
);

export default App;
