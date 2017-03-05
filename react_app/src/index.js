import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

import LoginPage from './components/LoginPage' 
import MenuPage from './components/MenuPage'
import AlertPage from './components/AlertPage'
import EventPage from './components/EventPage'
import MessagePage from './components/MessagePage'


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='login' component={LoginPage} />
      <Route path='menu' component={MenuPage}/>>
      <Route path='alerts' component={AlertPage}/>
      <Route path='events' component={EventPage}/>
      <Route path='message' component={MessagePage}/>
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
