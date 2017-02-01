import React from 'react'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from 'components/app'
import Hero from 'components/hero/hero'
import LoginContainer from 'components/session/login_container'
import SignupContainer from 'components/session/signup_container'
import HomeContainer from 'components/app/home/home_container'

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
        { path: 'home', component: HomeContainer, onEnter: this._ensureLoggedIn }
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
      replace('/home')
    }
  }

  render () {
    return <Router history={ browserHistory } routes={ this.routes } />
  }
}

export default AppRouter