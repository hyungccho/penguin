export const SessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
  INCREMENT_LIVE_ERROR_COUNT: 'INCREMENT_LIVE_ERROR_COUNT',
  DECREMENT_LIVE_ERROR_COUNT: 'DECREMENT_LIVE_ERROR_COUNT',
  RESET_LIVE_ERROR_COUNT: 'RESET_LIVE_ERROR_COUNT'
}

export const login = (user) => ({
  type: SessionConstants.LOGIN,
  user
})

export const logout = () => ({
  type: SessionConstants.LOGOUT
})

export const signup = (user) => ({
  type: SessionConstants.SIGNUP,
  user
})

export const receiveCurrentAccount = (user) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user
})