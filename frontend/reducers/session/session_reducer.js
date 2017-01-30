// Actions
import { SessionConstants } from 'actions/session/session_actions'

// Plugins
import merge from 'lodash/merge'

const _nullUser = Object.freeze({
  currentUser: {},
  loginError: {},
  signupError: {}
})

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.user.response
      return merge({}, state, { currentUser })

    case SessionConstants.LOGOUT:
      return merge({}, _nullUser)

    case SessionConstants.LOGIN_FAILED:
      let loginError = action.response
      return merge({}, state, { loginError })
      
    case SessionConstants.SIGNUP_FAILED:
      let signupError = action.response
      return merge({}, state, { signupError })

    default:
      return state
  }
}



export default SessionReducer