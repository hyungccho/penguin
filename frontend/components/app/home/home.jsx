import React from 'react'
import { withRouter } from 'react-router'

class Home extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return <div className='wrapper'></div>;
  }
}

export default withRouter(Home)