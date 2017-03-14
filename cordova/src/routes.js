import React from 'react'
import auth from './lib/authentication.js'

import App from './App'
import LoginPage from './components/LoginPage'
import MenuPage from './components/Menu/MenuPage'
import EventPage from './components/EventPage'
import MessagePage from './components/MessagePage'
import AlertPage from './components/Alerts/AlertPage'


function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'test',
      component: <h2>Test</h2>
    },
    {
      path: 'login',
      component: LoginPage
    },
    {
      onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes

        // MENU
        {
          path: 'menu',
          component: MenuPage
        },

        // ALERTS
        {
          path: 'alerts',
          component: AlertPage
        },

        // MESSAGE
        {
          path: 'message',
          component: MessagePage
        },

        // EVENTS
        {
          path: 'events',
          component: EventPage
        }
      ]
    }
  ]
}