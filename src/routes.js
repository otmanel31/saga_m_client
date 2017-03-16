import React from 'react'
import auth from './lib/authentication.js'

import App from './modules/App/App'
import LoginPage from './modules/Login/LoginPage'
import MenuPage from './modules/Menu/MenuPage'
import EventPage from './modules/EventPage'
import MessagePage from './modules/MessagePage'
import AlertPage from './modules/Alerts'
import Settings from './modules/Settings'


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
        },

        // SETTINGS
        {
          path: 'settings',
          component: Settings
        }
        
      ]
    }
  ]
}