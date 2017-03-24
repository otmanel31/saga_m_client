import React from 'react'

import App from './modules/App/App'
import LoginPage from './modules/Login/LoginPage'
import MenuPage from './modules/Menu/MenuPage'
import EventPage from './modules/EventPage'
import MessagePage from './modules/MessagePage'
import AlertPage from './modules/Alerts'
import Settings from './modules/Settings'

export default (store) => {

  function redirectToLogin(nextState, replace) {
    const { auth: { isAuthenticated }} = store.getState()
  //TODO Test localStorage existing token validity
    if (!isAuthenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  return {
    path: '/',
    component: App,
    childRoutes: [
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
}