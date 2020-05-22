import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import { Provider } from "react-redux";
import store from "configureStore";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import TodoModalContainer from "containers/TodoModalContainer/TodoModalContainer";
import { createHashHistory } from "history";
import { loginSuccess } from "actions/authActions";
import { fetchTodosAction } from "actions/todoActions";
import { auth } from "firebaseConfig";

const customHistory = createHashHistory();

auth.onAuthStateChanged((user) => {
  if (user) {
    customHistory.push("/");
    store.dispatch(loginSuccess(user));
    store.dispatch(fetchTodosAction(user.uid));
  } else customHistory.push("/login");
});

const App = () => (
  <Provider store={store}>
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
