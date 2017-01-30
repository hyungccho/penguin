import { connect } from 'react-redux'

// Components
import LoginForm from 'components/session/login_form'

// Actions
import { login } from 'actions/session/session_actions'

const mapStateToProps = state => ({
  loginError: state.session.loginError
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (user) => dispatch(login(user))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)