import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import routes from './routes'

import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as alertsReducer } from './modules/Alerts/reducer'

import apiMiddleware from './middleware/api'

const reducers = combineReducers({
  alerts: alertsReducer
})

const store = createStore(
  reducers, composeWithDevTools(
    applyMiddleware(apiMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes} />
  </Provider>,
  document.getElementById('root')
);