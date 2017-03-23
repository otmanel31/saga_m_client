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
import { routerReducer as routing } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as alertsReducer } from './modules/Alerts/reducer'
import { reducer as loginReducer } from './modules/Login/reducer'

import apiMiddleware from './middleware/api'

const reducers = combineReducers({
  alerts: alertsReducer,
  auth: loginReducer,
  routing
})

const store = createStore(
  reducers, composeWithDevTools(
    applyMiddleware(apiMiddleware))
);

const history = syncHistoryWithStore(hashHistory, store)
const routes = createRoutes(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

document.addEventListener('deviceready', getToken, false);

function getToken() {
    console.log("START :::::::::::::::::::: !!!!!!!")
    window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log("TOKEN :::::::::::::::::::::::::::::::::::::: " + token);
    }, function(error) {
        console.error(error);
    });

}