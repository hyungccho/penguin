import { connect } from 'react-redux'

// Components
import AppRouter from 'components/router/router'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

export default connect(
  mapStateToProps
)(AppRouter)