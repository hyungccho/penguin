import React from 'react'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from 'components/app'
import Hero from 'components/hero/hero'
import LoginContainer from 'components/session/login_container'
import SignupContainer from 'components/session/signup_container'
import Home from 'components/app/home'
import Sidebar from 'components/app/layout/sidebar/sidebar'
import BusinessesContainer from 'components/app/businesses/businesses_container'

class AppRouter extends React.Component {
  constructor (props) {
    super(props)
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this)
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
    
    this.routes = {
      path: '/',
      component: App,
      indexRoute: {
        component: Hero,
        onEnter: this._redirectIfLoggedIn
      },
      childRoutes: [
        { path: 'login', component: LoginContainer, onEnter: this._redirectIfLoggedIn },
        { path: 'signup', component: SignupContainer, onEnter: this._redirectIfLoggedIn },
        {
          path: 'dashboard',
          component: Home,
          onEnter: this._ensureLoggedIn,
          childRoutes: [
            {
              path: '/businesses',
              components: { main: BusinessesContainer, sidebar: Sidebar }
            }
          ]
        }
      ]
    }
  }

  _ensureLoggedIn (nextState, replace) {
    if (!this.props.store.getState().session.currentUser) {
      replace('/login')
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace('/dashboard')
    }
  }

  render () {
    return <Router history={ browserHistory } routes={ this.routes } />
  }
}

export default AppRouter