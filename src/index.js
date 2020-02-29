import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import reducers from './store/configureStore';
const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, promiseMiddleware, thunk)));

import Login from "./page/Login";
import Home from "./page/Home";
import Content from "./page/Content";
import Journals from "./page/Journals";
import Notifications from "./page/Notifications";
import Search from "./page/Search";
import SignUp from "./page/SignUp";
import ProfilePage from "./page/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route push exact path="/" component={Login} />
          <Route push exact path="/signup/" component={SignUp} />
          <Route push exact path="/profile/:user" component={ProfilePage} />
          <Route push exact path="/home/" component={Home} />
          <Route push exact path="/content/:article" component={Content} />
          <Route push exact path="/journals/" component={Journals} />
          <Route push exact path="/notifications/" component={Notifications} />
          <Route push exact path="/search/:data" component={Search} />
          <Route push exact path="/search/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

