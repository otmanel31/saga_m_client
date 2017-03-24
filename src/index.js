import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App/App';

import './index.css';
// Onsen UI Styling and Icons
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import createRoutes from './routes'

import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { reducer as alertsReducer } from './modules/Alerts/reducer'
import { reducer as settingsReducer } from './modules/Settings/reducer'
import { reducer as auth } from './modules/Login/reducer'

import apiMiddleware from './middleware/api'
import mockFetch from './mock/fetch'

const reducers = combineReducers({
  alerts: alertsReducer,
  settings : settingsReducer,
  auth,
  routing
})

const store = createStore(
  reducers, composeWithDevTools(
    applyMiddleware(thunk, apiMiddleware, routerMiddleware(hashHistory)))
);

const history = syncHistoryWithStore(hashHistory, store)
const routes = createRoutes(store)

// Mock fetch calls in order to bypass back end 
if (process.env.DEV_MODE === 'mock') {
  mockFetch()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

document.addEventListener('deviceready', getToken, false);
//document.addEventListener('deviceready', startGPS, false);

function getToken() {
  console.log("START :::::::::::::::::::: !!!!!!!")
  window.FirebasePlugin.getToken(function (token) {
    // save this server-side and use it to push notifications to this device
    console.log("TOKEN :::::::::::::::::::::::::::::::::::::: " + token);
  }, function (error) {
    console.error(error);
  });
}


