import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import {Router, Route, hashHistory} from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as alertsReducer} from './components/Alerts/reducer'

import apiMiddleware from './middleware/api'

import LoginPage from './components/LoginPage' 
import MenuPage from './components/Menu/MenuPage'
import AlertPage from './components/Alerts/AlertPage'
import EventPage from './components/EventPage'
import MessagePage from './components/MessagePage'

import SimpleAlert from './components/Alerts/SimpleAlert'

const reducers = combineReducers({
  alerts : alertsReducer
})

const store = createStore(
  reducers, composeWithDevTools(
  applyMiddleware(apiMiddleware))
);

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='login' component={LoginPage} />
        <Route path='menu' component={MenuPage}/>
        <Route path='alerts' component={AlertPage}/>
        <Route path='events' component={EventPage}/>
        <Route path='message' component={MessagePage}/>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);